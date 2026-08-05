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
exports.UserPinEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
let UserPinEntity = class UserPinEntity {
    pinId;
    userPin;
    userPinIv;
    userPinAuthTag;
    pinsRequested;
    pinsRequestedResetAt;
    pinsExpiredAt;
    pinUsed;
    passwordReseted;
    userIdPin;
};
exports.UserPinEntity = UserPinEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserPinEntity.prototype, "pinId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], UserPinEntity.prototype, "userPin", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], UserPinEntity.prototype, "userPinIv", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], UserPinEntity.prototype, "userPinAuthTag", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { default: 0 }),
    __metadata("design:type", Number)
], UserPinEntity.prototype, "pinsRequested", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { nullable: true }),
    __metadata("design:type", Date)
], UserPinEntity.prototype, "pinsRequestedResetAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { nullable: false }),
    __metadata("design:type", Date)
], UserPinEntity.prototype, "pinsExpiredAt", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { nullable: false, default: false }),
    __metadata("design:type", Boolean)
], UserPinEntity.prototype, "pinUsed", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { nullable: false, default: false }),
    __metadata("design:type", Boolean)
], UserPinEntity.prototype, "passwordReseted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity_1.UserEntity, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", UserEntity_1.UserEntity)
], UserPinEntity.prototype, "userIdPin", void 0);
exports.UserPinEntity = UserPinEntity = __decorate([
    (0, typeorm_1.Entity)("user_pin")
], UserPinEntity);
//# sourceMappingURL=UserPinEntity.js.map