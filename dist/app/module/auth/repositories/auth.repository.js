"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const auth_repository_interface_1 = __importDefault(require("./interfaces/auth.repository.interface"));
const UserEntity_1 = require("../../../entities/UserEntity");
const UserPinEntity_1 = require("../../../entities/UserPinEntity");
const databaseConexion_1 = require("../../../../DB/databaseConexion");
class AuthRepository extends auth_repository_interface_1.default {
    userRepository;
    userPinRepository;
    constructor() {
        super();
        this.userPinRepository = databaseConexion_1.AppDataSource.getRepository(UserPinEntity_1.UserPinEntity); // indicação de q irá ser utilizado o repositorio
        this.userRepository = databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
    }
    // criar usuário
    async createUser(input) {
        const user = await this.userRepository.create(input);
        const { userEmail } = await this.userRepository.save(user);
        return { userEmail };
    }
    // get em todos os usuários
    async getAllUser() {
        return await this.userRepository.find();
    }
    // get em um unico usuário
    async getOneUser(input) {
        return await this.userRepository.findOne({
            where: { userEmail: input.userEmail },
        });
    }
    // update em um unico usuário
    async updateUserPassword(input) {
        const { affected } = await this.userRepository.update({ userId: input.userId }, {
            userPassword: input.userPassword,
            userPasswordIv: input.userPasswordIv,
            userPasswordAuthTag: input.userPasswordAuthTag,
        });
        return { affected };
    }
    // get no pin, iv e authtag
    async getOnePin(input) {
        const user = await this.userPinRepository.findOne({
            where: { userIdPin: { userId: input.userId } },
        });
        return user;
    }
    // criar pin
    async createPin(input) {
        const user = await this.userPinRepository.create({
            userIdPin: { userId: input.userId },
            userPin: input.userPin,
            userPinIv: input.userPinIv,
            userPinAuthTag: input.userPinAuthTag,
            pinsRequested: input.pinsRequested,
            pinsRequestedResetAt: input.pinsRequestedResetAt,
            pinsExpiredAt: input.pinsExpiredAt,
            pinUsed: input.pinUsed,
            passwordReseted: input.passwordReseted,
        });
        const { userIdPin } = await this.userPinRepository.save(user);
        return { userId: userIdPin.userId };
    }
    // update nas informações: userPin, userPinIv, userPinAuthtag, pinUsed, passwordReseted
    async updatePin(input) {
        const getUser = await this.getOnePin({ userId: input.userId });
        if (!getUser) {
            const affected = 0;
            return { affected };
        }
        const { affected } = await this.userPinRepository.update({ userIdPin: { userId: input.userId } }, {
            pinsRequested: input.pinsRequested ?? getUser.pinsRequested,
            pinsRequestedResetAt: input.pinsRequestedResetAt ?? getUser.pinsRequestedResetAt,
            pinsExpiredAt: input.pinsExpiredAt ?? getUser.pinsExpiredAt,
            userPin: input.userPin ?? getUser.userPin,
            userPinIv: input.userPinIv ?? getUser.userPinIv,
            userPinAuthTag: input.userPinAuthTag ?? getUser.userPinAuthTag,
            pinUsed: input.pinUsed ?? getUser.pinUsed,
            passwordReseted: input.passwordReseted ?? getUser.passwordReseted,
        });
        return { affected };
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map