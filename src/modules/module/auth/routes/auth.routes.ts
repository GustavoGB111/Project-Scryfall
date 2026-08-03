import { Router } from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/auth.controller";
import { Middlewares } from "../../../middlewares/middleware";

const authRoutes = Router();

const authController = container.resolve<AuthController>("AuthController");
const middleware = container.resolve<Middlewares>("Middleware");

authRoutes.post("/create", authController.createUser.bind(authController));

authRoutes.post("/login", authController.login.bind(authController));

authRoutes.put("/pin/request", authController.requestPin.bind(authController));

authRoutes.put("/pin/send", authController.sendPin.bind(authController));

authRoutes.put(
  "/pin/reset/password",
  middleware.forgotPassword,
  authController.resetPassword.bind(authController),
);

export default authRoutes;
