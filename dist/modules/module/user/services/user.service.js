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
const get_user_any_dto_1 = require("../dto/controler&service.dto/get-user-any.dto");
const get_user_all_dto_1 = require("../dto/controler&service.dto/get-user-all.dto");
const validate_erros_1 = require("../../../../common/validate.erros");
const delete_user_me_dto_1 = require("../dto/controler&service.dto/delete-user-me.dto");
const delete_user_any_dto_1 = require("../dto/controler&service.dto/delete-user-any.dto");
const update_user_me_dto_1 = require("../dto/controler&service.dto/update-user-me.dto");
const update_user_any_dto_1 = require("../dto/controler&service.dto/update-user-any.dto");
const update_user_role_dto_1 = require("../dto/controler&service.dto/update-user-role.dto");
const user_table_enum_1 = require("../../../../common/enums/user.table.enum");
const user_up_down_enum_1 = require("../../../../common/enums/user.up-down-enum");
const bcrypt_1 = require("bcrypt");
const encryption_1 = require("../../../../common/encryption");
let UserService = class UserService {
    userRepository;
    Encrypt;
    constructor(userRepository, Encrypt) {
        this.userRepository = userRepository;
        this.Encrypt = Encrypt;
    }
    async getUserMe(input) {
        try {
            await (0, validate_erros_1.validateErros)(get_user_dto_1.getYourUserInputDto, input);
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
            await (0, validate_erros_1.validateErros)(delete_user_me_dto_1.deleteYourUserInputDto, input);
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
    async updateUserMe(input) {
        try {
            await (0, validate_erros_1.validateErros)(update_user_me_dto_1.updateUserMeInputDto, input);
            const user = await this.userRepository.getUser({ userId: input.userId });
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            const emailExisting = await this.userRepository.getUser({
                userEmail: input.userNewEmail,
            });
            if (emailExisting) {
                throw new Error("Erro");
            }
            const decryptedPassword = await this.Encrypt.decrypt({
                iv: user.userPasswordIv,
                encrypted: user.userPassword,
                authTag: user.userPasswordAuthTag,
            });
            const comparePassword = await (0, bcrypt_1.compare)(input.userOldPassword, decryptedPassword);
            if (!comparePassword) {
                throw new Error("Senha Incorreta");
            }
            if (input.userNewPassword) {
                if (input.userNewPassword !== input.userNewPasswordConfirm) {
                    throw new Error("As senhas não se coincidem");
                }
                const hashedPassword = await (0, bcrypt_1.hash)(input.userNewPassword, 10);
                const passwordEncryptedInfos = await this.Encrypt.encrypt(hashedPassword);
                const response = await this.userRepository.updateUser({
                    userId: input.userId,
                    userEmail: input.userNewEmail,
                    userName: input.userName,
                    userPassword: passwordEncryptedInfos.encrypted,
                    userPasswordIv: passwordEncryptedInfos.iv,
                    userPasswordAuthTag: passwordEncryptedInfos.authTag,
                });
                if (!response || response.affected !== 1) {
                    throw new Error("Usuário não pôde ser atualizado");
                }
            }
            else {
                const response = await this.userRepository.updateUser({
                    userId: input.userId,
                    userEmail: input.userNewEmail,
                    userName: input.userName,
                });
                if (!response || response.affected !== 1) {
                    throw new Error("Usuário não pôde ser atualizado");
                }
            }
        }
        catch (error) {
            throw error;
        }
    }
    async getOneUser(input) {
        try {
            await (0, validate_erros_1.validateErros)(get_user_any_dto_1.getOneUserInputDto, input);
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
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllUser(input) {
        try {
            await (0, validate_erros_1.validateErros)(get_user_all_dto_1.getUsersInputDto, input);
            if (input.userRole !== user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const yourUser = await this.userRepository.getUser({
                userId: input.userId,
            });
            if (!yourUser) {
                throw new Error("Usuário não encontrado");
            }
            if (yourUser.userRole != user_table_enum_1.UserRole.ADMIN) {
                throw new Error("Você não pode acessar essa requisição");
            }
            const response = await this.userRepository.getAllUser();
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async updateOneUser(input) {
        try {
            await (0, validate_erros_1.validateErros)(update_user_any_dto_1.updateAnyUserInputDto, input);
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
            const user = await this.userRepository.getUser({
                userId: input.userId,
            });
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            const emailExisting = await this.userRepository.getUser({
                userEmail: input.userNewEmail,
            });
            if (emailExisting) {
                throw new Error("Email já existente");
            }
            if (input.userNewPassword) {
                if (input.userNewPassword !== input.userNewPasswordConfirm) {
                    throw new Error("As senhas não se coincidem");
                }
                const hashedPassword = await (0, bcrypt_1.hash)(input.userNewPassword, 10);
                const passwordEncryptedInfos = await this.Encrypt.encrypt(hashedPassword);
                const response = await this.userRepository.updateUser({
                    userId: input.userId,
                    userEmail: input.userNewEmail,
                    userName: input.userNewName,
                    userPassword: passwordEncryptedInfos.encrypted,
                    userPasswordIv: passwordEncryptedInfos.iv,
                    userPasswordAuthTag: passwordEncryptedInfos.authTag,
                });
                if (!response || response.affected !== 1) {
                    throw new Error("Usuário não pôde ser atualizado");
                }
            }
            else {
                const response = await this.userRepository.updateUser({
                    userId: input.userId,
                    userEmail: input.userNewEmail,
                    userName: input.userNewEmail,
                });
                if (!response || response.affected !== 1) {
                    throw new Error("Usuário não pôde ser atualizado");
                }
            }
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOneUser(input) {
        try {
            await (0, validate_erros_1.validateErros)(delete_user_any_dto_1.deleteOneUserInputDto, input);
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
            await (0, validate_erros_1.validateErros)(update_user_role_dto_1.updateAnyUserRoleInputDto, input);
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
    __param(1, (0, tsyringe_1.inject)("Encrypt")),
    __metadata("design:paramtypes", [user_repository_interface_1.default,
        encryption_1.Encrypt])
], UserService);
//# sourceMappingURL=user.service.js.map