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
exports.CardEntity = void 0;
const typeorm_1 = require("typeorm");
const card_rarity_enum_1 = require("../../common/enums/card.rarity.enum");
let CardEntity = class CardEntity {
    id;
    name;
    mana_cost;
    cmc;
    type_line;
    oracle_text;
    colors;
    color_identity;
    set_code;
    set_name;
    collector_number;
    rarity;
    image_uris;
    prices;
    scryfall_uri;
};
exports.CardEntity = CardEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid", { nullable: false, unique: true }),
    __metadata("design:type", String)
], CardEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "mana_cost", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { nullable: false }),
    __metadata("design:type", Number)
], CardEntity.prototype, "cmc", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "type_line", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "oracle_text", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: true, array: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "colors", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: true, array: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "color_identity", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "set_code", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "set_name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "collector_number", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { enum: card_rarity_enum_1.cardRarity, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "rarity", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "image_uris", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "prices", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "scryfall_uri", void 0);
exports.CardEntity = CardEntity = __decorate([
    (0, typeorm_1.Entity)("card")
], CardEntity);
//# sourceMappingURL=CardEntity.js.map