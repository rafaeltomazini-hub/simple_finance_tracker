import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    path: req.path,
  });

  res.status(status).json({
    success: false,
    message,
  });
};

export default errorHandler;
