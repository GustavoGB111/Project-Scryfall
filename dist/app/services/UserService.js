"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserEntity_1 = require("../entities/UserEntity");
const UserRepository_1 = require("../repositories/UserRepository");
class UserService {
    userRepository = new UserRepository_1.UserRepository(UserEntity_1.UserEntity);
    async findAll() {
        return userRepository.getUsers();
    }
}
//# sourceMappingURL=UserService.js.map