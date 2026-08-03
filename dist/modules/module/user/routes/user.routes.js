"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const userRoutes = (0, express_1.Router)();
const userController = tsyringe_1.container.resolve("UserController");
const middleware = tsyringe_1.container.resolve("Middleware");
// o bind serve pra função sempre conseguir utilizar o this independentemente de como ela é chamada
userRoutes.get("/get/me", middleware.auth, userController.getUserMe.bind(userController));
userRoutes.get("/get/all", middleware.auth, userController.getAllUsers.bind(userController));
userRoutes.put("/get/any", middleware.auth, userController.getOneUser.bind(userController));
userRoutes.put("/update/me", middleware.auth, userController.updateUserMe.bind(userController));
userRoutes.put("/update/any", middleware.auth, userController.updateOneUser.bind(userController));
userRoutes.put("/update/role/any", middleware.auth, userController.updateOneUserRole.bind(userController));
userRoutes.delete("/delete/me", middleware.auth, userController.deleteUserMe.bind(userController));
userRoutes.delete("/delete/any", middleware.auth, userController.deleteOneUser.bind(userController));
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map