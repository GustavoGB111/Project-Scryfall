"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_repository_interface_1 = __importDefault(require("./interfaces/user.repository.interface"));
const UserEntity_1 = require("../../../../dataBase/entities/UserEntity");
const databaseConexion_1 = require("../../../../dataBase/databaseConexion");
class UserRepository extends user_repository_interface_1.default {
    userRepository;
    constructor() {
        super();
        // pegar um objeto que faz requisição ao banco de dados para o repositorio x
        this.userRepository = databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
    }
    async getUser(input) {
        return await this.userRepository.findOne({
            where: { userId: input.userId },
        });
    }
    async getAllUser() {
        return await this.userRepository.find();
    }
    async deleteUser(input) {
        const { affected } = await this.userRepository.delete({
            userId: input.userId,
        });
        return { affected };
    }
    async updateUser(input) {
        const user = await this.getUser({ userId: input.userId });
        if (!user) {
            const affected = 0;
            return { affected };
        }
        const { affected } = await this.userRepository.update({
            userId: input.userId,
        }, {
            userEmail: input.userEmail ?? user.userEmail,
            userName: input.userName ?? user.userName,
            userRole: input.userRole ?? user.userRole,
            userPassword: input.userPassword ?? user.userPassword,
            userPasswordIv: input.userPasswordIv ?? user.userPasswordIv,
            userPasswordAuthTag: input.userPasswordAuthTag ?? user.userPasswordAuthTag,
        });
        return { affected };
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map