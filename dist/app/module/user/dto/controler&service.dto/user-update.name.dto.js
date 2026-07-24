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
exports.UserUpdateNameOutputDto = exports.UserUpdateNameInputDto = void 0;
const class_validator_1 = require("class-validator");
class UserUpdateNameInputDto {
    userId;
    userName;
}
exports.UserUpdateNameInputDto = UserUpdateNameInputDto;
__decorate([
    (0, class_validator_1.IsUUID)("4", { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], UserUpdateNameInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.MinLength)(3, { message: "O campo deve ter no mínimo 3 caracteres" }),
    __metadata("design:type", String)
], UserUpdateNameInputDto.prototype, "userName", void 0);
class UserUpdateNameOutputDto {
    userName;
}
exports.UserUpdateNameOutputDto = UserUpdateNameOutputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.MinLength)(3, { message: "O campo deve ter no mínimo 3 caracteres" }),
    __metadata("design:type", String)
], UserUpdateNameOutputDto.prototype, "userName", void 0);
//# sourceMappingURL=user-update.name.dto.js.map