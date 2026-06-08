"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_repository_interface_1 = __importDefault(require("./interfaces/user.repository.interface"));
const UserEntity_1 = require("../../../entities/UserEntity");
const databaseConexion_1 = require("../../../../DB/databaseConexion");
class UserRepository extends user_repository_interface_1.default {
    userRepository;
    constructor() {
        super();
        this.userRepository = databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
    }
    async getAll() {
        return this.userRepository.find();
    }
    async createUser(input) {
        const user = await this.userRepository.create(input); // Cria na mémoria o user(como se criasse um registro)
        return await this.userRepository.save(user); // Salva o User no Banco de Dados(como se salvasse o registro)
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map