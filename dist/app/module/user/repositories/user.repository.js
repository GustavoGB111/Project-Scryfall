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
        // pegar um objeto que faz requisição ao banco de dados para o repositorio x
        this.userRepository = databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
    }
    async getAll() {
        return this.userRepository.find();
    }
    async getOne(input) {
        return await this.userRepository.findOne({
            where: { userEmail: input.userEmail },
        });
    }
    async updateUserName(input) {
        const user = await this.userRepository.findOne({
            where: { userId: input.userId },
        });
        if (!user) {
            throw new Error("erro ao atualizar nome");
        }
        Object.assign(user, { userName: input.userName }); // converte o user antigo atualizando as propriedades do novo "dto"
        const { userName } = await this.userRepository.save(user); // salva o user no banco de dados e retorna a entidade
        return { userName };
    }
    async deleteUser(input) {
        const { affected } = await this.userRepository.delete({
            userId: input.userId,
        });
        return { affected };
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map