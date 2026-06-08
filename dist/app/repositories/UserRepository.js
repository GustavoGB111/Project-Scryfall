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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm"); // é uma classe q funciona como uma interface de acesso a uma tabela entidade no banco de dados
const tsyringe_1 = require("tsyringe");
let UserRepository = class UserRepository {
    userRepository;
    // indica que a classe deve ser implementada conforme o IUserRepository
    constructor(userRepository) {
        this.userRepository = userRepository;
    } // injeção de dependencias
    // O repository utiliza o userEntity como base pras requisições no DB
    async getUsers() {
        // método da classe q está no molde do getUser
        return await this.userRepository.find({
            select: {
                id: true,
                name: true,
                email: true,
            },
        }); // metodo que retorna os users do banco de dados
    }
    async registerUser(userRegisterInputData) {
        return await this.userRepository.create(userRegisterInputData);
    }
    async getUser(userLoginInputData) {
        const user = await this.userRepository.findOne({
            where: {
                email: userLoginInputData.email,
            },
            select: {
                id: true,
                password: true,
            },
        });
        if (!user) {
            throw new Error("Error 404: User not found");
        }
        return user;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserRepository);
//# sourceMappingURL=UserRepository.js.map