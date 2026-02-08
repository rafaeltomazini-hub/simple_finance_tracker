import { NextFunction, Request, Response } from "express";

const validateJWTToken = (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Not implemented yet" });
};

export default validateJWTToken;
