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
exports.UserRequestPinOutputDto = exports.UserRequestPinInputDto = void 0;
const class_validator_1 = require("class-validator");
// requisição 1 -> enviar email e pedir pin
class UserRequestPinInputDto {
    userId;
    userPin;
    userPinIv;
    userPinAuthTag;
    pinsExpiredAt;
    pinsRequested;
    pinsRequestedResetAt;
    pinUsed;
    passwordReseted;
}
exports.UserRequestPinInputDto = UserRequestPinInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], UserRequestPinInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.MinLength)(6, { message: "O campo deve ter no mínimo 6 caracteres" }),
    __metadata("design:type", String)
], UserRequestPinInputDto.prototype, "userPin", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], UserRequestPinInputDto.prototype, "userPinIv", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], UserRequestPinInputDto.prototype, "userPinAuthTag", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Date)
], UserRequestPinInputDto.prototype, "pinsExpiredAt", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Number)
], UserRequestPinInputDto.prototype, "pinsRequested", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Date)
], UserRequestPinInputDto.prototype, "pinsRequestedResetAt", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Boolean)
], UserRequestPinInputDto.prototype, "pinUsed", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Boolean)
], UserRequestPinInputDto.prototype, "passwordReseted", void 0);
class UserRequestPinOutputDto {
    userId;
}
exports.UserRequestPinOutputDto = UserRequestPinOutputDto;
//# sourceMappingURL=pin-request.dto.js.map