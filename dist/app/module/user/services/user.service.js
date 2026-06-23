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
const user_create_dto_1 = require("../dto/user-create.dto");
const user_update_dto_1 = require("../dto/user-update.dto");
const bcrypt_1 = require("bcrypt");
const user_get_dto_1 = require("../dto/user-get.dto");
const user_login_dto_1 = require("../dto/user-login.dto");
const validate_erros_1 = require("../../../../common/validate.erros");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_delete_dto_1 = require("../dto/user-delete.dto");
const secret = process.env.JWT_SECRET;
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
            const { email } = input;
            const user = await this.userRepository.getOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async createUser(input) {
        try {
            await (0, validate_erros_1.validateErros)(user_create_dto_1.UserCreateInputDto, input);
            const { name, email, password } = input;
            const user = await this.userRepository.getOne({
                email: input.email,
            });
            if (!!user) {
                throw new Error("User already exist");
            }
            const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
            const userEntity = await this.userRepository.createUser({
                name,
                email,
                password: hashedPassword,
            });
            return {
                email: userEntity.email,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updateUserName(input) {
        try {
            await (0, validate_erros_1.validateErros)(user_update_dto_1.UserUpdateNameInputDto, input);
            const userEntity = await this.userRepository.updateUserName(input);
            if (input.name !== userEntity.name) {
                throw new Error("Usuário não atualizado");
            }
            return { name: userEntity.name };
        }
        catch (error) {
            throw error;
        }
    }
    async loginUser(input) {
        try {
            await (0, validate_erros_1.validateErros)(user_login_dto_1.UserLoginInputDto, input); // ta parando aq
            const { email, password } = input;
            const user = await this.userRepository.getOne({ email });
            if (!user) {
                throw new Error("Credenciais inválidas");
            }
            const passwordCompare = await (0, bcrypt_1.compare)(password, user.password);
            if (!passwordCompare) {
                throw new Error("Credenciais inválidas");
            }
            /**
             * primeira {} -> serve pra guardar dentro do token o id (payload)
             * depois guarda o token (signature)
             * por ultimo diz em quanto tempo ele vai expirar
             */
            const token = jsonwebtoken_1.default.sign({ id: user.id }, secret, {
                expiresIn: "1h", // funciona como criação de token
            });
            // Usar o verify com o token e o secret pra pegar o payload
            return {
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUser(input) {
        try {
            (0, validate_erros_1.validateErros)(user_delete_dto_1.UserDeleteInputDto, input);
            const { affected } = await this.userRepository.deleteUser(input);
            if (affected != 1) {
                throw new Error("Falha ao deletar");
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