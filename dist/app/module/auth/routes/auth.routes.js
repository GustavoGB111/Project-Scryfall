"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const forgot_password_1 = __importDefault(require("../../../middlewares/forgot-password"));
const authRoutes = (0, express_1.Router)();
const authController = tsyringe_1.container.resolve("AuthController");
authRoutes.post("/create", authController.createUser.bind(authController));
authRoutes.put("/login", authController.login.bind(authController));
authRoutes.put("/pin/request", authController.requestPin.bind(authController));
authRoutes.put("/pin/send", authController.sendPin.bind(authController));
authRoutes.put("/pin/reset/password", forgot_password_1.default, authController.resetPassword.bind(authController));
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map