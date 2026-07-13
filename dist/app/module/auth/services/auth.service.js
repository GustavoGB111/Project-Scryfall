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
exports.AuthService = void 0;
const tsyringe_1 = require("tsyringe");
const user_create_dto_1 = require("../dto/controller&service.dto/user-create.dto");
const validate_erros_1 = require("../../../../common/validate.erros");
const auth_repository_interface_1 = __importDefault(require("../repositories/interfaces/auth.repository.interface"));
const bcrypt_1 = require("bcrypt");
const login_dto_1 = require("../dto/controller&service.dto/login.dto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const forgot_password_dto_1 = require("../dto/controller&service.dto/forgot-password.dto");
const brevo_1 = require("@getbrevo/brevo");
const secret = process.env.JWT_SECRET;
const secretRefresh = process.env.JWT_SECRET_REFRESH;
const senderEmail = process.env.BREVO_SENDER_EMAIL;
const senderName = process.env.BREVO_SENDER_NAME;
let AuthService = class AuthService {
    AuthRepository;
    apiBrevo;
    constructor(AuthRepository, apiBrevo) {
        this.AuthRepository = AuthRepository;
        this.apiBrevo = apiBrevo;
    }
    async registerUser(input) {
        try {
            await (0, validate_erros_1.validateErros)(user_create_dto_1.UserCreateInputDto, input);
            const userExisting = await this.AuthRepository.getOneUser({
                email: input.email,
            });
            if (!!userExisting) {
                throw new Error("Erro");
            }
            const hashedPassword = await (0, bcrypt_1.hash)(input.password, 10);
            const userEntity = await this.AuthRepository.createUser({
                email: input.email,
                name: input.name,
                password: hashedPassword,
            });
            if (!userEntity) {
                throw new Error("erro, Usuário não criado");
            }
            return userEntity;
        }
        catch (error) {
            throw error;
        }
    }
    async login(input) {
        try {
            (0, validate_erros_1.validateErros)(login_dto_1.LoginInputDto, input);
            const user = await this.AuthRepository.getOneUser({
                email: input.email,
            });
            if (!user) {
                throw new Error("Email ou Senha inválidos");
            }
            const passwordCompare = await (0, bcrypt_1.compare)(input.password, user.password);
            if (!passwordCompare) {
                throw Error("Email ou Senha inválidos");
            }
            /**
             * primeira {} -> serve pra guardar dentro do token o id e o email (payload)
             * depois guarda o token (signature)
             * por ultimo diz em quanto tempo ele vai expirar
             */
            const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, secret, {
                expiresIn: "3h",
            });
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
    async requestPin(input) {
        try {
            (0, validate_erros_1.validateErros)(forgot_password_dto_1.forgotPasswordInputDto, input);
            const emailExisting = await this.AuthRepository.getOneUser({
                email: input.email,
            });
            if (!emailExisting) {
                throw new Error("Erro");
            }
            const pin = Math.floor(100000 + Math.random() * 900000).toString();
            await this.apiBrevo.transactionalEmails.sendTransacEmail({
                sender: {
                    name: senderName,
                    email: senderEmail,
                },
                to: [
                    {
                        email: input.email,
                    },
                ],
                subject: "Recuperação de senha",
                htmlContent: `
          <h2>Recuperação de senha</h2>
            <p>Seu código é:</p>
            <h1>${pin}</h1>
            <p>Esse código expira em 10 minutos.</p>
          `,
            });
            const hashedPin = await (0, bcrypt_1.hash)(pin, 10);
            const userPinEntity = await this.AuthRepository.requestPin({
                email: input.email,
                pin: hashedPin,
            });
            if (!userPinEntity) {
                throw new Error("Erro");
            }
            return {
                email: input.email,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async sendPin(input) {
        try {
            (0, validate_erros_1.validateErros)(forgot_password_dto_1.SendPinInputDto, input);
            const emailExisting = await this.AuthRepository.getOneRequestPin({
                email: input.email,
            });
            if (!emailExisting) {
                throw new Error("Erro");
            }
            const pinCompare = await (0, bcrypt_1.compare)(input.pin, emailExisting.pin);
            if (!pinCompare) {
                throw new Error("Erro");
            }
            const token = jsonwebtoken_1.default.sign({ email: input.email }, secretRefresh, {
                expiresIn: "10m",
            });
            return {
                token,
                email: input.email,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async resetPassword(input) {
        try {
            (0, validate_erros_1.validateErros)(forgot_password_dto_1.ResetPassworInputDto, input);
            if (input.password !== input.confirmPassword) {
                throw new Error("As senhas devem ser iguais");
            }
            const hashedPassword = await (0, bcrypt_1.hash)(input.password, 10);
            const user = await this.AuthRepository.updateUserPassword({
                email: input.email,
                password: hashedPassword,
            });
            if (!user || user.affected !== 1) {
                throw new Error("Erro ao atualizar a senha");
            }
        }
        catch (error) {
            throw error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AuthRepository")),
    __param(1, (0, tsyringe_1.inject)("apiBrevo")),
    __metadata("design:paramtypes", [auth_repository_interface_1.default,
        brevo_1.BrevoClient])
], AuthService);
//# sourceMappingURL=auth.service.js.map