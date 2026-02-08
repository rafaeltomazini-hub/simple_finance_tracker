import { Router } from "express";
import * as AuthController from "../controllers/auth/auth.controller";
import validateJWTToken from "../middlewares/validateJWTToken";

const router = Router();

router.post("/sign-up", validateJWTToken, AuthController.register);
router.post("/login", (req, res) => {});
router.post("/logout", (req, res) => {});

export default router;
