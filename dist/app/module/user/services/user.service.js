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
const get_user_dto_1 = require("../dto/controler&service.dto/get-user.dto");
const validate_erros_1 = require("../../../../common/validate.erros");
const delete_user_dto_1 = require("../dto/controler&service.dto/delete-user.dto");
const update_user_dto_1 = require("../dto/controler&service.dto/update-user.dto");
const user_table_enum_1 = require("../../../../common/enums/user.table.enum");
const user_up_down_enum_1 = require("../../../../common/enums/user.up-down-enum");
let UserService = class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUserMe(input) {
        try {
            (0, validate_erros_1.validateErros)(get_user_dto_1.getYourUserInputDto, input);
            const user = await this.userRepository.getUser({ userId: input.userId });
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            const { userPassword, userPasswordIv, userPasswordAuthTag, ...result } = user;
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUserMe(input) {
        try {
            (0, validate_erros_1.validateErros)(delete_user_dto_1.deleteYourUserInputDto, input);
            const user = await this.userRepository.getUser({ userId: input.userId });
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            const userDeleted = await this.userRepository.deleteUser({
                userId: input.userId,
            });
            if (!userDeleted) {
                throw new Error("Usuário não pôde ser deletado");
            }
        }
        catch (error) {
            throw error;
        }
    }
    async updateUserNameMe(input) {
        try {
            (0, validate_erros_1.validateErros)(update_user_dto_1.updateUserNameInputDto, input);
            const user = await this.userRepository.getUser({ userId: input.userId });
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            const userUpdated = await this.userRepository.updateUser({
                userId: input.userId,
                userName: input.newName,
            });
            if (!userUpdated || userUpdated.affected !== 1) {
                throw new Error("Usuário não pôde ser atualizado");
            }
        }
        catch (error) {
            throw error;
        }
    }
    async getOneUser(input) {
        try {
            (0, validate_erros_1.validateErros)(get_user_dto_1.getOneUserInputDto, input);
            if (input.userRole !== user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const yourUser = await this.userRepository.getUser({
                userId: input.yourUserId,
            });
            if (!yourUser) {
                throw new Error("Usuário não encontrado");
            }
            if (yourUser.userRole !== user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const user = await this.userRepository.getUser({
                userId: input.userId,
            });
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            const { userPassword, userPasswordAuthTag, userPasswordIv, ...response } = user;
            if (response.userRole !== user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOneUser(input) {
        try {
            (0, validate_erros_1.validateErros)(delete_user_dto_1.deleteOneUserInputDto, input);
            if (input.userRole !== user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const yourUser = await this.userRepository.getUser({
                userId: input.yourUserId,
            });
            if (!yourUser) {
                throw new Error("Usuário não encontrado");
            }
            if (yourUser.userRole != user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const user = await this.userRepository.deleteUser({
                userId: input.userId,
            });
            if (!user || user.affected !== 1) {
                throw new Error("O usuário não pôde ser deletado");
            }
        }
        catch (error) {
            throw error;
        }
    }
    async modifyUserRole(input) {
        try {
            (0, validate_erros_1.validateErros)(update_user_dto_1.updateAnyUserRoleInputDto, input);
            if (input.userRole !== user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const yourUser = await this.userRepository.getUser({
                userId: input.yourUserId,
            });
            if (!yourUser) {
                throw new Error("Usuário não encontrado");
            }
            if (yourUser.userRole != user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const userRole = await this.userRepository.getUser({
                userId: input.userId,
            });
            if (!userRole) {
                throw new Error("Usuário não encontrado");
            }
            if (input.userUpDown === user_up_down_enum_1.UserUpDown.UP) {
                if (userRole.userRole !== user_table_enum_1.UserRole.CLIENT) {
                    throw new Error("Você já é um admin");
                }
                const userUpdated = await this.userRepository.updateUser({
                    userId: input.userId,
                    userRole: user_table_enum_1.UserRole.ADMIN,
                });
                if ((!userUpdated || userUpdated.affected) !== 1) {
                    throw new Error("User não pôde ser atualizado");
                }
            }
            else if (input.userUpDown === user_up_down_enum_1.UserUpDown.DOWN) {
                if (userRole.userRole !== user_table_enum_1.UserRole.ADMIN) {
                    throw new Error("Você já é um client");
                }
                const userUpdated = await this.userRepository.updateUser({
                    userId: input.userId,
                    userRole: user_table_enum_1.UserRole.CLIENT,
                });
                if (!userUpdated || userUpdated.affected !== 1) {
                    throw new Error("User não pôde ser atualizado");
                }
            }
            else {
                throw new Error("User não pôde ser atualizado");
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