import { Router } from "express";
import * as AuthController from "../controllers/auth/auth.controller";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", (req, res) => {});
router.post("/logout", (req, res) => {});

export default router;
