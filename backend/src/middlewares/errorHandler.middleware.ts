import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const isAppError = err instanceof AppError;

  const statusCode = isAppError ? err.statusCode : 500;
  const message = isAppError ? err.message : "Internal server error";

  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
  });

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;
