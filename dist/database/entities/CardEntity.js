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
    cardId;
    cardName;
    cardManaCost;
    cardCMC;
    cardTypeLine;
    cardOracleText;
    cardColors;
    cardColorIdentity;
    cardSet;
    cardSetName;
    cardCollectorNumber;
    cardRarity;
    cardImageUris;
    cardPrices;
    cardScryfallUri;
};
exports.CardEntity = CardEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid", { name: "card_id" }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "mana_cost", length: 255, nullable: true }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardManaCost", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "cmc", nullable: false }),
    __metadata("design:type", Number)
], CardEntity.prototype, "cardCMC", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "type_line", length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardTypeLine", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "oracle_text", nullable: true }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardOracleText", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "colors", nullable: true, array: true }),
    __metadata("design:type", Array)
], CardEntity.prototype, "cardColors", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "color_identity", nullable: true, array: true }),
    __metadata("design:type", Array)
], CardEntity.prototype, "cardColorIdentity", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "set_code", length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardSet", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "set_name", length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardSetName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "collector_number", length: 255, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardCollectorNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "rarity", enum: card_rarity_enum_1.cardRarity, nullable: false }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardRarity", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "image_uris", nullable: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "cardImageUris", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "prices", nullable: true }),
    __metadata("design:type", Object)
], CardEntity.prototype, "cardPrices", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "scryfall_uri", length: 255, nullable: true }),
    __metadata("design:type", String)
], CardEntity.prototype, "cardScryfallUri", void 0);
exports.CardEntity = CardEntity = __decorate([
    (0, typeorm_1.Entity)("card")
], CardEntity);
//# sourceMappingURL=CardEntity.js.map