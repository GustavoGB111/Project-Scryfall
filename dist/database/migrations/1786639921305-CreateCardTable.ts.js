"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCardTable1786639921305 = void 0;
const typeorm_1 = require("typeorm");
const card_rarity_enum_1 = require("../../common/enums/card.rarity.enum");
class CreateCardTable1786639921305 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "card",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isUnique: true,
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "mana_cost",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "cmc",
                    type: "float",
                    isNullable: false,
                },
                {
                    name: "type_line",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "oracle_text",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "colors",
                    type: "varchar",
                    isArray: true,
                    isNullable: true,
                },
                {
                    name: "color_identity",
                    type: "varchar",
                    isArray: true,
                    isNullable: true,
                },
                {
                    name: "set_code",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "set_name",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "collector_number",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "rarity",
                    type: "enum",
                    enum: Object.values(card_rarity_enum_1.cardRarity), // pega apenas o valor
                    isNullable: false,
                },
                {
                    name: "image_uris",
                    type: "json",
                    isNullable: true,
                },
                {
                    name: "prices",
                    type: "json",
                    isNullable: true,
                },
                {
                    name: "scryfall_uri",
                    type: "varchar",
                    isNullable: true,
                    length: "255",
                },
            ],
        }));
    }
    async down(queryRunner) { }
}
exports.CreateCardTable1786639921305 = CreateCardTable1786639921305;
//# sourceMappingURL=1786639921305-CreateCardTable.ts.js.map