"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const auth_repository_interface_1 = __importDefault(require("./interfaces/auth.repository.interface"));
const UserEntity_1 = require("../../../entities/UserEntity");
const databaseConexion_1 = require("../../../../DB/databaseConexion");
class AuthRepository extends auth_repository_interface_1.default {
    userRepository;
    userPinRepository;
    constructor() {
        super();
        this.userPinRepository = databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntityPin); // indicação de q irá ser utilizado o repositorio
        this.userRepository = databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
    }
    async createUser(input) {
        const user = await this.userRepository.create(input);
        return await this.userRepository.save(user);
    }
    async getAllUser() {
        return await this.userRepository.find();
    }
    async getOneUser(input) {
        return await this.userRepository.findOne({ where: { email: input.email } });
    }
    async updateUserPassword(input) {
        const { affected } = await this.userRepository.update({ email: input.email }, { password: input.password });
        return { affected };
    }
    async getOneRequestPin(input) {
        const user = await this.userPinRepository.findOne({
            where: { email: input.email },
            select: { pin: true },
        });
        return user;
    }
    async requestPin(input) {
        const user = await this.userPinRepository.create(input);
        return await this.userPinRepository.save(user);
    }
    async deletePin(input) {
        const { affected } = await this.userPinRepository.delete({
            email: input.email,
        });
        return { affected };
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map