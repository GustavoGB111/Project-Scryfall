"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegisterRouter = exports.userLoginRouter = exports.userGetRouter = void 0;
var UserController_1 = require("./userControllers/UserController");
Object.defineProperty(exports, "userGetRouter", { enumerable: true, get: function () { return __importDefault(UserController_1).default; } });
var loginUserController_1 = require("./userControllers/loginUserController");
Object.defineProperty(exports, "userLoginRouter", { enumerable: true, get: function () { return __importDefault(loginUserController_1).default; } });
var registerUserController_1 = require("./userControllers/registerUserController");
Object.defineProperty(exports, "userRegisterRouter", { enumerable: true, get: function () { return __importDefault(registerUserController_1).default; } });
//# sourceMappingURL=organizationUser.js.map