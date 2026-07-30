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
exports.pinUpdateOutputDto = exports.pinUpdateInputDto = exports.passwordUsedUpdateOutputDto = exports.passwordResetedUpdateInputDto = exports.pinUsedUpdateOutputDto = exports.pinUsedUpdateInputDto = exports.pinResetOutputDto = exports.pinResetInputDto = void 0;
const class_validator_1 = require("class-validator");
class pinResetInputDto {
    userId;
    pinsRequested;
    pinsRequestedResetAt;
    pinsExpiredAt;
}
exports.pinResetInputDto = pinResetInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], pinResetInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Number)
], pinResetInputDto.prototype, "pinsRequested", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Date)
], pinResetInputDto.prototype, "pinsRequestedResetAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Date)
], pinResetInputDto.prototype, "pinsExpiredAt", void 0);
class pinResetOutputDto {
    affected;
}
exports.pinResetOutputDto = pinResetOutputDto;
// update em pin e password
class pinUsedUpdateInputDto {
    userId;
    pinUsed;
}
exports.pinUsedUpdateInputDto = pinUsedUpdateInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], pinUsedUpdateInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Boolean)
], pinUsedUpdateInputDto.prototype, "pinUsed", void 0);
class pinUsedUpdateOutputDto {
    affected;
}
exports.pinUsedUpdateOutputDto = pinUsedUpdateOutputDto;
class passwordResetedUpdateInputDto {
    userId;
    passwordReseted;
}
exports.passwordResetedUpdateInputDto = passwordResetedUpdateInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], passwordResetedUpdateInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Boolean)
], passwordResetedUpdateInputDto.prototype, "passwordReseted", void 0);
class passwordUsedUpdateOutputDto {
    affected;
}
exports.passwordUsedUpdateOutputDto = passwordUsedUpdateOutputDto;
class pinUpdateInputDto {
    userId;
    pinsRequested;
    pinsRequestedResetAt;
    pinsExpiredAt;
    userPin;
    userPinIv;
    userPinAuthTag;
    pinUsed;
    passwordReseted;
}
exports.pinUpdateInputDto = pinUpdateInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], pinUpdateInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "pinsRequested", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "pinsRequestedResetAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "pinsExpiredAt", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "userPin", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "userPinIv", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "userPinAuthTag", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "pinUsed", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], pinUpdateInputDto.prototype, "passwordReseted", void 0);
class pinUpdateOutputDto {
    affected;
}
exports.pinUpdateOutputDto = pinUpdateOutputDto;
//# sourceMappingURL=pin-update.dto.js.map