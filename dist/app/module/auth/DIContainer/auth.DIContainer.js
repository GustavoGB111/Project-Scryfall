"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe"); // onde guardarão as intancias
const auth_repository_1 = require("../repositories/auth.repository");
const brevo_1 = require("@getbrevo/brevo");
const auth_service_1 = require("../services/auth.service");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const BREVO_API_KEY = process.env.BREVO_API_KEY;
tsyringe_1.container.registerInstance("apiBrevo", new brevo_1.BrevoClient({ apiKey: BREVO_API_KEY }));
tsyringe_1.container.registerInstance("AuthRepository", new auth_repository_1.AuthRepository());
tsyringe_1.container.registerInstance("AuthService", new auth_service_1.AuthService(tsyringe_1.container.resolve("AuthRepository"), tsyringe_1.container.resolve("apiBrevo")));
tsyringe_1.container.registerInstance("AuthController", new auth_controller_1.default(tsyringe_1.container.resolve("AuthService")));
//# sourceMappingURL=auth.DIContainer.js.map