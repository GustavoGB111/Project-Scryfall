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
const bcrypt_1 = require("bcrypt");
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
            throw new Error("Erro aqui");
        }
    }
    async getOne(input) {
        try {
            const { email } = input;
            if (!email) {
                throw new Error("email ou id inválidos");
            }
            if (email?.trim() === "") {
                throw new Error("Email não pode ser vazio");
            }
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
            const { name, email, password } = input;
            if (!name || !email || !password) {
                throw new Error("Algum campo nulo");
            }
            if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
                throw new Error("Algum campo é vazio");
            }
            const userExisting = await this.userRepository.getOne({
                email: input.email,
            });
            if (!userExisting) {
                throw new Error("User not found");
            }
            if (password.trim().length < 8) {
                throw new Error("Sua senha não pode ter menos de 8 caracteres");
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
            throw new Error("Deu erro aqui");
        }
    }
    async updateUserName(input) {
        try {
            if (!input.name || !input.id) {
                throw new Error("O nome ou id não pode ser nulo");
            }
            const userEntity = await this.userRepository.updateUserName(input);
            if (input.name !== userEntity.name) {
                throw new Error("Usuário não atualizado");
            }
            return { name: userEntity.name };
        }
        catch (error) {
            throw new Error("Deu erro aqui");
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