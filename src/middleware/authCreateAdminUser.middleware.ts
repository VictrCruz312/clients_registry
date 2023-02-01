import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import test from "node:test";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const authCreateAdminUserMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const usersAdmin = await userRepository.find({
    where: { admin: true },
  });

  if (usersAdmin.length === 0) {
    request.body.userAdmin = { admin: true };

    return next();
  }

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
      request.body.userAdmin = { admin: decoded.admin };
      next();
    }
  );
};

export default authCreateAdminUserMiddleware;
