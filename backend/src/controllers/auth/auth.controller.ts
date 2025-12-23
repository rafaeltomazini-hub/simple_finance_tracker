import { Request, Response } from "express";
import { AppError } from "../../utils/AppError";
import * as AuthService from "../../services/auth.service";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const response = await AuthService.register({ email, password });

  return res.json(response);
};
