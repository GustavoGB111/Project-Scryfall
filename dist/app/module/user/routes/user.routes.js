"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const auth_1 = __importDefault(require("../../../middlewares/auth"));
const userRoutes = (0, express_1.Router)();
const userController = tsyringe_1.container.resolve("UserController");
// o bind serve pra função sempre conseguir utilizar o this independentemente de como ela é chamada
userRoutes.put("get/me", auth_1.default, userController.getUserMe.bind(userController));
userRoutes.delete("delete/me", auth_1.default, userController.deleteUserMe.bind(userController));
userRoutes.put("updateName/me", auth_1.default, userController.updateUserNameMe.bind(userController));
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map