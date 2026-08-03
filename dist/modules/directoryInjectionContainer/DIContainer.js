"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe"); // importação do container de tsyringe
const user_repository_1 = require("../module/user/repositories/user.repository");
const user_service_1 = require("../module/user/services/user.service");
const user_controller_1 = __importDefault(require("../module/user/controllers/user.controller"));
const auth_repository_1 = require("../module/auth/repositories/auth.repository");
const brevo_1 = require("@getbrevo/brevo");
const auth_service_1 = require("../module/auth/services/auth.service");
const auth_controller_1 = __importDefault(require("../module/auth/controllers/auth.controller"));
const middleware_1 = require("../middlewares/middleware");
const encryption_1 = require("../../common/encryption");
// Instancia para criptografia
tsyringe_1.container.registerInstance("Encrypt", new encryption_1.Encrypt());
// Instancia para middleware
tsyringe_1.container.registerInstance("Middleware", new middleware_1.Middlewares());
// Instancias para User
tsyringe_1.container.registerInstance("UserRepository", new user_repository_1.UserRepository());
tsyringe_1.container.registerInstance("UserService", new user_service_1.UserService(tsyringe_1.container.resolve("UserRepository"), tsyringe_1.container.resolve("Encrypt")));
tsyringe_1.container.registerInstance("UserController", new user_controller_1.default(tsyringe_1.container.resolve("UserService")));
// Instancias para Auth
const BREVO_API_KEY = process.env.BREVO_API_KEY;
tsyringe_1.container.registerInstance("ApiBrevo", new brevo_1.BrevoClient({ apiKey: BREVO_API_KEY }));
tsyringe_1.container.registerInstance("AuthRepository", new auth_repository_1.AuthRepository());
tsyringe_1.container.registerInstance("AuthService", new auth_service_1.AuthService(tsyringe_1.container.resolve("AuthRepository"), tsyringe_1.container.resolve("ApiBrevo"), tsyringe_1.container.resolve("Encrypt")));
tsyringe_1.container.registerInstance("AuthController", new auth_controller_1.default(tsyringe_1.container.resolve("AuthService")));
//# sourceMappingURL=DIContainer.js.map