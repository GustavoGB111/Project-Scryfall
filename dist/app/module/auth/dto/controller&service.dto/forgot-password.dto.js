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
exports.ResetPassworInputDto = exports.SendPinOutputDto = exports.SendPinInputDto = exports.forgotPasswordOutputDto = exports.forgotPasswordInputDto = void 0;
const class_validator_1 = require("class-validator");
//Rota 1
class forgotPasswordInputDto {
    email;
}
exports.forgotPasswordInputDto = forgotPasswordInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], forgotPasswordInputDto.prototype, "email", void 0);
class forgotPasswordOutputDto {
    email;
}
exports.forgotPasswordOutputDto = forgotPasswordOutputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "o tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], forgotPasswordOutputDto.prototype, "email", void 0);
//Rota 2
class SendPinInputDto {
    email;
    pin;
}
exports.SendPinInputDto = SendPinInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "o tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], SendPinInputDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.MinLength)(6, { message: "O tamanho tem que ser de 6 digitos" }),
    (0, class_validator_1.MaxLength)(6, { message: "O tamanho tem que ser de 6 digitos " }),
    __metadata("design:type", String)
], SendPinInputDto.prototype, "pin", void 0);
class SendPinOutputDto {
    token;
    email;
}
exports.SendPinOutputDto = SendPinOutputDto;
__decorate([
    (0, class_validator_1.IsJWT)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], SendPinOutputDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "o tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], SendPinOutputDto.prototype, "email", void 0);
//Rota 3
class ResetPassworInputDto {
    email;
    password;
    confirmPassword;
}
exports.ResetPassworInputDto = ResetPassworInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "o tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], ResetPassworInputDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.MinLength)(8, { message: "O campo deve ter ao menos 8 dígitos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], ResetPassworInputDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], ResetPassworInputDto.prototype, "confirmPassword", void 0);
//# sourceMappingURL=forgot-password.dto.js.map