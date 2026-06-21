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
    async getOne(input) {
        return await this.userRepository.findOne({
            where: { email: input.email },
        });
    }
    async createUser(input) {
        const user = await this.userRepository.create(input); // Cria na mémoria o user(como se criasse um registro)
        return await this.userRepository.save(user); // Salva o User no Banco de Dados(como se salvasse o registro)
    }
    async updateUserName(input) {
        await this.userRepository.update({ id: input.id }, { name: input.name });
        const user = await this.userRepository.findOne({ where: { id: input.id } });
        if (!user) {
            throw new Error("usuário não encontrado");
        }
        return { name: user.name };
    }
    async updateUserPassword(input) {
        const { id, password } = input;
        const user = await this.userRepository.update({ id: id }, { password: password });
        if (user.affected !== 1) {
            throw new Error("user not found");
        }
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map