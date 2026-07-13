import { Router } from "express";
import { container } from "tsyringe";
import authForgotPassword from "../../../middlewares/forgot-password";
import AuthController from "../controllers/auth.controller";

const authRoutes = Router();

const authController = container.resolve<AuthController>("AuthController");

authRoutes.post("/create", authController.createUser.bind(authController));

authRoutes.put("/login", authController.login.bind(authController));

authRoutes.put("/requestPin", authController.requestPin.bind(authController));

authRoutes.put("/sendPin", authController.sendPin.bind(authController));

authRoutes.put(
  "/resetPassword",
  authForgotPassword,
  authController.resetPassword.bind(authController),
);

export default authRoutes;
