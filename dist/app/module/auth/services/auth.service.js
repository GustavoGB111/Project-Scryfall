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
const encryption_1 = require("../../../../common/encryption");
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
                userEmail: input.userEmail,
            });
            if (userExisting) {
                throw new Error("Email ja cadastrado");
            }
            const hashedPassword = await (0, bcrypt_1.hash)(input.userPassword, 10);
            const { encrypted, iv, authTag } = await (0, encryption_1.encrypt)(hashedPassword);
            const userEntity = await this.AuthRepository.createUser({
                userEmail: input.userEmail,
                userName: input.userName,
                userPassword: encrypted,
                userPasswordIv: iv,
                userPasswordAuthTag: authTag,
            });
            if (!userEntity) {
                throw new Error("Erro, Usuário não criado");
            }
            return userEntity;
        }
        catch (error) {
            throw error;
        }
    }
    async login(input) {
        try {
            await (0, validate_erros_1.validateErros)(login_dto_1.LoginInputDto, input);
            const userExisting = await this.AuthRepository.getOneUser({
                userEmail: input.userEmail,
            });
            if (!userExisting) {
                throw new Error("Email ou Senha inválidos");
            }
            const decryptedPassword = await (0, encryption_1.decrypt)({
                iv: userExisting.userPasswordIv,
                encrypted: userExisting.userPassword,
                authTag: userExisting.userPasswordAuthTag,
            });
            const passwordCompare = await (0, bcrypt_1.compare)(input.userPassword, decryptedPassword);
            if (!passwordCompare) {
                throw Error("Email ou Senha inválidos");
            }
            /**
             * primeira {} -> serve pra guardar dentro do token o id e o email (payload)
             * depois guarda o token (signature)
             * por ultimo diz em quanto tempo ele vai expirar
             */
            const token = jsonwebtoken_1.default.sign({
                userId: userExisting.userId,
                userEmail: userExisting.userEmail,
                userRole: userExisting.userRole,
            }, secret, {
                expiresIn: "3h",
            });
            return {
                token,
                user: {
                    userId: userExisting.userId,
                    userName: userExisting.userName,
                    userEmail: userExisting.userEmail,
                },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async requestPin(input) {
        try {
            await (0, validate_erros_1.validateErros)(forgot_password_dto_1.forgotPasswordInputDto, input);
            const emailExisting = await this.AuthRepository.getOneUser({
                userEmail: input.userEmail,
            });
            if (!emailExisting) {
                throw new Error("Erro");
            }
            const infosPin = await this.AuthRepository.getOnePin({
                userId: emailExisting.userId,
            });
            const now = new Date();
            const nowPlus5Minuts = new Date(now.getTime() + 5 * 60 * 1000);
            const nowPlus10Minuts = new Date(now.getTime() + 10 * 60 * 1000);
            if (infosPin) {
                if (infosPin.pinsRequested > 3 && infosPin.pinsRequestedResetAt > now) {
                    throw new Error("erro, multiplas solicitações");
                }
                else if (infosPin.pinsRequested <= 3 &&
                    infosPin.pinsRequestedResetAt > now) {
                    const userPinUpdated = await this.AuthRepository.updatePin({
                        userId: emailExisting.userId,
                        pinsRequested: infosPin.pinsRequested + 1,
                        pinsRequestedResetAt: infosPin.pinsRequestedResetAt,
                        pinsExpiredAt: nowPlus10Minuts,
                    });
                    if (!userPinUpdated || userPinUpdated.affected !== 1) {
                        throw new Error("Erro ao atualizar dados");
                    }
                }
                else {
                    const userPinUpdated = await this.AuthRepository.updatePin({
                        userId: emailExisting.userId,
                        pinsRequested: 1,
                        pinsRequestedResetAt: nowPlus5Minuts,
                        pinsExpiredAt: nowPlus10Minuts,
                    });
                    if (!userPinUpdated || userPinUpdated.affected !== 1) {
                        throw new Error("Erro ao atualizar dados");
                    }
                }
            }
            // Enviar pin ao user
            const pin = Math.floor(100000 + Math.random() * 900000).toString();
            await this.apiBrevo.transactionalEmails.sendTransacEmail({
                sender: {
                    name: senderName,
                    email: senderEmail,
                },
                to: [
                    {
                        email: input.userEmail,
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
            // criar ou alterar pin
            const hashedPin = await (0, bcrypt_1.hash)(pin, 10);
            const { iv, encrypted, authTag } = (0, encryption_1.encrypt)(hashedPin);
            if (infosPin) {
                const userPinEntity = await this.AuthRepository.updatePin({
                    userId: emailExisting.userId,
                    userPin: encrypted,
                    userPinIv: iv,
                    userPinAuthTag: authTag,
                    pinUsed: false,
                    passwordReseted: false,
                });
                if (!userPinEntity || userPinEntity.affected !== 1) {
                    throw new Error("Erro ao atualizar dados");
                }
            }
            else if (!infosPin) {
                const userPinEntity = await this.AuthRepository.createPin({
                    userId: emailExisting.userId,
                    userPin: encrypted,
                    userPinIv: iv,
                    userPinAuthTag: authTag,
                    pinsRequested: 1,
                    pinsRequestedResetAt: nowPlus5Minuts,
                    pinsExpiredAt: nowPlus10Minuts,
                    pinUsed: false,
                    passwordReseted: false,
                });
                if (!userPinEntity) {
                    throw new Error("Erro ao atualizar dados");
                }
            }
            return {
                userEmail: input.userEmail,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async sendPin(input) {
        try {
            await (0, validate_erros_1.validateErros)(forgot_password_dto_1.SendPinInputDto, input);
            const emailExisting = await this.AuthRepository.getOneUser({
                userEmail: input.userEmail,
            });
            if (!emailExisting) {
                throw new Error("Erro");
            }
            const infosPin = await this.AuthRepository.getOnePin({
                userId: emailExisting.userId,
            });
            if (!infosPin) {
                throw new Error("Erro");
            }
            const now = new Date();
            if (infosPin.pinsExpiredAt < now) {
                throw new Error("Erro");
            }
            const hashedPin = await (0, encryption_1.decrypt)({
                iv: infosPin.userPinIv,
                encrypted: infosPin.userPin,
                authTag: infosPin.userPinAuthTag,
            });
            const pinCompare = await (0, bcrypt_1.compare)(input.userPin, hashedPin);
            if (!pinCompare) {
                throw new Error("Erro");
            }
            const token = jsonwebtoken_1.default.sign({ userId: emailExisting.userId }, secretRefresh, {
                expiresIn: "10m",
            });
            if (infosPin.pinUsed !== false) {
                throw new Error("Erro, pin ja utilizado");
            }
            const pinUsed = await this.AuthRepository.updatePin({
                userId: emailExisting.userId,
                pinUsed: true,
            });
            if (!pinUsed || pinUsed.affected !== 1) {
                throw new Error("Pin não pôde ser utilizado");
            }
            return {
                token,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async resetPassword(input) {
        try {
            await (0, validate_erros_1.validateErros)(forgot_password_dto_1.ResetPassworInputDto, input);
            if (input.userPassword !== input.userConfirmPassword) {
                throw new Error("Erro, as senhas devem ser iguais");
            }
            const infosPin = await this.AuthRepository.getOnePin({
                userId: input.userId,
            });
            if (!infosPin) {
                throw new Error("Erro, usuario não encontrado");
            }
            if (infosPin.passwordReseted != false) {
                throw new Error("Erro, senha já alterada");
            }
            const hashedPassword = await (0, bcrypt_1.hash)(input.userPassword, 10);
            const { iv, authTag, encrypted } = await (0, encryption_1.encrypt)(hashedPassword);
            const passwordReseted = await this.AuthRepository.updatePin({
                userId: input.userId,
                passwordReseted: true,
            });
            if (!passwordReseted || passwordReseted.affected !== 1) {
                throw new Error("Erro, senha já alterada");
            }
            const user = await this.AuthRepository.updateUserPassword({
                userId: input.userId,
                userPassword: encrypted,
                userPasswordIv: iv,
                userPasswordAuthTag: authTag,
            });
            if (!user || user.affected !== 1) {
                throw new Error("Erro, senha não pôde ser alterada");
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