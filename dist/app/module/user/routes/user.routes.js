"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_1 = __importDefault(require("../../../middlewares/auth"));
const userRoutes = (0, express_1.Router)();
const userController = tsyringe_1.container.resolve(user_controller_1.default);
// o bind serve pra função sempre conseguir utilizar o this independentemente de como ela é chamada
userRoutes.get("/getUsers", userController.getUsers.bind(userController)); // você precisa redeclarar a função como param
userRoutes.get("/getUser", userController.getUser.bind(userController));
userRoutes.put("/loginUser", userController.loginUser.bind(userController));
userRoutes.put("/updateNameUser", auth_1.default, userController.updateUserName.bind(userController));
userRoutes.post("/create", userController.createUser.bind(userController)); // após o post é tudo url
userRoutes.delete("/delete", auth_1.default, userController.deleteUser.bind(userController));
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map