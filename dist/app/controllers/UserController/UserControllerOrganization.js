"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegisterRouter = exports.userLoginRouter = exports.userGetRouter = void 0;
var UserController_1 = require("./UserController");
Object.defineProperty(exports, "userGetRouter", { enumerable: true, get: function () { return __importDefault(UserController_1).default; } });
var LoginUserController_1 = require("./LoginUserController");
Object.defineProperty(exports, "userLoginRouter", { enumerable: true, get: function () { return __importDefault(LoginUserController_1).default; } });
var RegisterUserController_1 = require("./RegisterUserController");
Object.defineProperty(exports, "userRegisterRouter", { enumerable: true, get: function () { return __importDefault(RegisterUserController_1).default; } });
//# sourceMappingURL=UserControllerOrganization.js.map