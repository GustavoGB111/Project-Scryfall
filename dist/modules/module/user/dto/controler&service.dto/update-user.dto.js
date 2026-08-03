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
exports.updateAnyUserRoleInputDto = exports.updateAnyUserInputDto = exports.updateUserMeInputDto = void 0;
const class_validator_1 = require("class-validator");
const user_up_down_enum_1 = require("../../../../../common/enums/user.up-down-enum");
const user_table_enum_1 = require("../../../../../common/enums/user.table.enum");
class updateUserMeInputDto {
    userId;
    userOldPassword;
    userNewPassword;
    userNewPasswordConfirm;
    userName;
    userEmail;
}
exports.updateUserMeInputDto = updateUserMeInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateUserMeInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    (0, class_validator_1.Length)(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" }),
    __metadata("design:type", String)
], updateUserMeInputDto.prototype, "userOldPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.Length)(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" }),
    __metadata("design:type", Object)
], updateUserMeInputDto.prototype, "userNewPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.Length)(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" }),
    __metadata("design:type", Object)
], updateUserMeInputDto.prototype, "userNewPasswordConfirm", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], updateUserMeInputDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "O tipo do dado é inválido" }),
    __metadata("design:type", Object)
], updateUserMeInputDto.prototype, "userEmail", void 0);
class updateAnyUserInputDto {
    userId;
    yourUserId;
    userRole;
    userNewPassword;
    userNewPasswordConfirm;
    userName;
    userEmail;
}
exports.updateAnyUserInputDto = updateAnyUserInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateAnyUserInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateAnyUserInputDto.prototype, "yourUserId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(user_table_enum_1.UserRole, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateAnyUserInputDto.prototype, "userRole", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.Length)(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" }),
    __metadata("design:type", Object)
], updateAnyUserInputDto.prototype, "userNewPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.Length)(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" }),
    __metadata("design:type", Object)
], updateAnyUserInputDto.prototype, "userNewPasswordConfirm", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    __metadata("design:type", Object)
], updateAnyUserInputDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "O tipo do dado é inválido" }),
    __metadata("design:type", Object)
], updateAnyUserInputDto.prototype, "userEmail", void 0);
class updateAnyUserRoleInputDto {
    userId;
    yourUserId;
    userRole;
    userUpDown;
}
exports.updateAnyUserRoleInputDto = updateAnyUserRoleInputDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateAnyUserRoleInputDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsUUID)("4", { message: "O formato não é válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateAnyUserRoleInputDto.prototype, "yourUserId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(user_table_enum_1.UserRole, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateAnyUserRoleInputDto.prototype, "userRole", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(user_up_down_enum_1.UserUpDown, { message: "O tipo de dado é inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo não pode ser vazio" }),
    __metadata("design:type", String)
], updateAnyUserRoleInputDto.prototype, "userUpDown", void 0);
//# sourceMappingURL=update-user.dto.js.map