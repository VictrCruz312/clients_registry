import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { decode } from "punycode";
import { AppError } from "../errors/AppError";

const authAdminMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token = request.headers.authorization;

  if (!token) {
    throw new AppError("token inválido", 401);
  }
  token = token.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError("token inválido", 401);
      }

      if (!decoded.admin) {
        throw new AppError("Somente admins tem acesso a essa rota", 401);
      }

      request.body.userLogged = { id: decoded.sub };
      next();
    }
  );
};

export default authAdminMiddleware;
