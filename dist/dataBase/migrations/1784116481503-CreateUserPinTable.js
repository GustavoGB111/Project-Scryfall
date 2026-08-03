"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserPinTable1784116481503 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserPinTable1784116481503 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "user_pin",
            columns: [
                {
                    name: "pinId",
                    type: "uuid",
                    isPrimary: true,
                    isNullable: false,
                    generationStrategy: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "userPin",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "userPinIv",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "userPinAuthTag",
                    type: "varchar",
                    isNullable: false,
                    length: "255",
                },
                {
                    name: "pinsExpiredAt",
                    type: "timestamp",
                    isNullable: false,
                },
                {
                    name: "pinsRequested",
                    type: "integer",
                    default: 0,
                },
                {
                    name: "pinsRequestedResetAt",
                    type: "timestamp",
                    isNullable: true,
                },
                {
                    name: "pinUsed",
                    type: "boolean",
                    isNullable: false,
                    default: false,
                },
                {
                    name: "passwordReseted",
                    type: "boolean",
                    isNullable: false,
                    default: false,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ["userId"],
                    referencedTableName: "user",
                    referencedColumnNames: ["userId"],
                    onDelete: "CASCADE",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user_pin"); // forma pra desfazer as alterações da migration
    }
}
exports.CreateUserPinTable1784116481503 = CreateUserPinTable1784116481503;
//# sourceMappingURL=1784116481503-CreateUserPinTable.js.map