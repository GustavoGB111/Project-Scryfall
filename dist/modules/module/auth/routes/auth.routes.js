"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const authRoutes = (0, express_1.Router)();
const authController = tsyringe_1.container.resolve("AuthController");
const middleware = tsyringe_1.container.resolve("Middleware");
authRoutes.post("/create", authController.createUser.bind(authController));
authRoutes.post("/login", authController.login.bind(authController));
authRoutes.put("/pin/request", authController.requestPin.bind(authController));
authRoutes.put("/pin/send", authController.sendPin.bind(authController));
authRoutes.put("/pin/reset/password", middleware.forgotPassword, authController.resetPassword.bind(authController));
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map