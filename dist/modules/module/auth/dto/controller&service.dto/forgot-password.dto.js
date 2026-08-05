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
exports.forgotPasswordOutputDto = exports.forgotPasswordInputDto = void 0;
const class_validator_1 = require("class-validator");
class forgotPasswordInputDto {
    userEmail;
}
exports.forgotPasswordInputDto = forgotPasswordInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsEmail)({}, { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], forgotPasswordInputDto.prototype, "userEmail", void 0);
class forgotPasswordOutputDto {
    userEmail;
}
exports.forgotPasswordOutputDto = forgotPasswordOutputDto;
//# sourceMappingURL=forgot-password.dto.js.map