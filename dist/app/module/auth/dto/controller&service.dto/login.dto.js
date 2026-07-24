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
exports.LoginOutputDto = exports.LoginInputDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
    userId;
    userName;
    userEmail;
}
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.Min)(1, { message: "O valor deve ser no mínimo 1" }),
    __metadata("design:type", String)
], UserDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.MinLength)(3, { message: "O campo deve ter no mínimo 3 caracteres" }),
    __metadata("design:type", String)
], UserDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], UserDto.prototype, "userEmail", void 0);
class LoginInputDto {
    userEmail;
    userPassword;
}
exports.LoginInputDto = LoginInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], LoginInputDto.prototype, "userEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.MinLength)(8, { message: "O campo deve ter no mínimo 8 caracteres" }),
    __metadata("design:type", String)
], LoginInputDto.prototype, "userPassword", void 0);
class LoginOutputDto {
    token;
    user;
}
exports.LoginOutputDto = LoginOutputDto;
__decorate([
    (0, class_validator_1.IsJWT)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], LoginOutputDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsObject)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", UserDto)
], LoginOutputDto.prototype, "user", void 0);
//# sourceMappingURL=login.dto.js.map