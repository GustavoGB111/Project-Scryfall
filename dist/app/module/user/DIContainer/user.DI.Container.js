"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe"); // importação do container de tsyringe
const user_repository_1 = require("../repositories/user.repository");
const user_service_1 = require("../services/user.service");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
/**
 * Inject -> indica o q vai ser injetado em cada parametro do construtor
 * Injetable -> indica que uma classe pode ser injetavel, a classe só pode ser injetada se tiver esse decorator
 **/
// Registro de Instância por meio de injeção
// Registrando instancia do UserRepository
tsyringe_1.container.registerInstance("UserRepository", // Key que representa a instancia de UserRepository
new user_repository_1.UserRepository());
// Registrando instancia do UserService
tsyringe_1.container.registerInstance("UserService", // Key que representa a instancia de UserService
new user_service_1.UserService(tsyringe_1.container.resolve("UserRepository")));
// Registrando instancia do UserController
tsyringe_1.container.registerInstance("UserController", new user_controller_1.default(tsyringe_1.container.resolve("UserService")));
//# sourceMappingURL=user.DI.Container.js.map