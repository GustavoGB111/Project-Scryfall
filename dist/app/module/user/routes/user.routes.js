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
userRoutes.get("/getAll", userController.getUsers.bind(userController)); // você precisa redeclarar a função como param
userRoutes.get("/getOne", userController.getUser.bind(userController));
userRoutes.put("/updateNameUser", auth_1.default, userController.updateUserName.bind(userController));
userRoutes.delete("/delete", auth_1.default, userController.deleteUser.bind(userController));
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map