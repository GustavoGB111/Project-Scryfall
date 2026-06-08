"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserControllerOrganization_1 = require("../controllers/UserController/UserControllerOrganization");
const routers = (0, express_1.Router)();
// User routes
routers.use("/users", UserControllerOrganization_1.userRegisterRouter);
routers.use("/users", UserControllerOrganization_1.userLoginRouter);
routers.use("/users", UserControllerOrganization_1.userGetRouter);
exports.default = routers;
//# sourceMappingURL=routes.js.map