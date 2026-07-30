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
userRoutes.get("get/me", auth_1.default, userController.getUserMe.bind(userController));
userRoutes.put("update/me", auth_1.default, userController.updateUserMe.bind(userController));
userRoutes.delete("delete/me", auth_1.default, userController.deleteUserMe.bind(userController));
userRoutes.put("get/any", auth_1.default, userController.getOneUser.bind(userController));
userRoutes.put("update/any", auth_1.default, userController.updateOneUser.bind(userController));
userRoutes.delete("delete/any", auth_1.default, userController.deleteOneUser.bind(userController));
userRoutes.put("update/role/any", auth_1.default, userController.updateOneUserRole.bind(userController));
userRoutes.get("get/all", auth_1.default, userController.getAllUsers.bind(userController));
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map