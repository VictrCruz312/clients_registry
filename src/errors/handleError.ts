import { AppError } from "./AppError";
import { Request, Response, NextFunction } from "express";

const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      error: error.errors,
    });
  }
  console.log(error);

  return res.status(500).json({ message: "Internal server error" });
};

export default handleError;
