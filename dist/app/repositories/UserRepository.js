"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../entities/User"));
const databaseConexion_1 = require("../../DB/databaseConexion");
// o getRepository é a ferramenta que permite a utilização do banco de dados
const userRepository = databaseConexion_1.AppDataSource.getRepository(User_1.default); // Utiliza User pra dizer em qual tabela deve procurar 
const getUsers = () => {
    return userRepository.find(); // método de procura
};
exports.default = { getUsers };
//# sourceMappingURL=UserRepository.js.map