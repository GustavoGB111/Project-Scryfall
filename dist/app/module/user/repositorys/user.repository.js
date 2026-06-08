"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_repository_interface_1 = require("./interfaces/user.repository.interface");
const UserEntity_1 = require("../../../entities/UserEntity");
const databaseConexion_1 = require("../../../../DB/databaseConexion");
class UserRepository extends user_repository_interface_1.IUserRepository {
    userRepository;
    constructor() {
        super();
        this.userRepository = databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
    }
    async getAll() {
        return this.userRepository.find();
    }
    async createUser(input) {
        const user = await this.userRepository.create(input);
        return await this.userRepository.save(user);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map