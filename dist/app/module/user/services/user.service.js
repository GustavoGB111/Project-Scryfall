"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tsyringe_1 = require("tsyringe");
const user_repository_interface_1 = __importDefault(require("../repositories/interfaces/user.repository.interface"));
const user_update_name_dto_1 = require("../dto/controler&service.dto/user-update.name.dto");
const user_get_dto_1 = require("../dto/controler&service.dto/user-get.dto");
const user_delete_dto_1 = require("../dto/controler&service.dto/user-delete.dto");
const validate_erros_1 = require("../../../../common/validate.erros");
let UserService = class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAll() {
        try {
            return this.userRepository.getAll();
        }
        catch (error) {
            throw error;
        }
    }
    async getOne(input) {
        try {
            await (0, validate_erros_1.validateErros)(user_get_dto_1.UserGetOneInputDto, input);
            const { userEmail } = input;
            const user = await this.userRepository.getOne({ userEmail });
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async updateUserName(input) {
        try {
            await (0, validate_erros_1.validateErros)(user_update_name_dto_1.UserUpdateNameInputDto, input);
            const { userName } = input;
            const userEntity = await this.userRepository.updateUserName(input);
            if (userName !== userEntity.userName || !userEntity) {
                throw new Error("Usuário não atualizado");
            }
            return { userName: userEntity.userName };
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUser(input) {
        try {
            (0, validate_erros_1.validateErros)(user_delete_dto_1.UserDeleteInputDto, input);
            const deleted = await this.userRepository.deleteUser(input);
            if (!deleted || deleted.affected !== 1) {
                throw new Error("Usuário não foi deletado");
            }
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UserRepository")),
    __metadata("design:paramtypes", [user_repository_interface_1.default])
], UserService);
//# sourceMappingURL=user.service.js.map