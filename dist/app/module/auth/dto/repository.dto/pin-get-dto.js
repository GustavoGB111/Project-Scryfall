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
exports.getPasswordResetedOutputDto = exports.getPasswordResetedInputDto = exports.getPinUsedOutputDto = exports.getPinUsedInputDto = exports.getPinInfosOutputDto = exports.getPinInfosInputDto = exports.getPinInputDto = void 0;
const class_validator_1 = require("class-validator");
class getPinInputDto {
    userId;
}
exports.getPinInputDto = getPinInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], getPinInputDto.prototype, "userId", void 0);
class getPinInfosInputDto {
    userId;
}
exports.getPinInfosInputDto = getPinInfosInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], getPinInfosInputDto.prototype, "userId", void 0);
class getPinInfosOutputDto {
    pinsRequested;
    pinsRequestedResetAt;
    pinsExpiredAt;
}
exports.getPinInfosOutputDto = getPinInfosOutputDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Number)
], getPinInfosOutputDto.prototype, "pinsRequested", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Date)
], getPinInfosOutputDto.prototype, "pinsRequestedResetAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.IsDate)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Date)
], getPinInfosOutputDto.prototype, "pinsExpiredAt", void 0);
class getPinUsedInputDto {
    userId;
}
exports.getPinUsedInputDto = getPinUsedInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], getPinUsedInputDto.prototype, "userId", void 0);
class getPinUsedOutputDto {
    pinUsed;
}
exports.getPinUsedOutputDto = getPinUsedOutputDto;
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Boolean)
], getPinUsedOutputDto.prototype, "pinUsed", void 0);
class getPasswordResetedInputDto {
    userId;
}
exports.getPasswordResetedInputDto = getPasswordResetedInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], getPasswordResetedInputDto.prototype, "userId", void 0);
class getPasswordResetedOutputDto {
    passwordReseted;
}
exports.getPasswordResetedOutputDto = getPasswordResetedOutputDto;
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", Boolean)
], getPasswordResetedOutputDto.prototype, "passwordReseted", void 0);
//# sourceMappingURL=pin-get-dto.js.map