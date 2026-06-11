"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1779815565535 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1779815565535 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name", //nome
                    type: "varchar", // tipo
                    isPrimary: false, // se é uma chave primaria
                    length: "100", //tamanho maximo do
                    isNullable: false, // não permite ser nulo
                },
                {
                    name: "email", //nome
                    type: "varchar", // tipo
                    isPrimary: false, // se é uma chave primaria
                    isUnique: true,
                    length: "100", //tamanho maximo do
                    isNullable: false, // não permite ser nulo
                },
                {
                    name: "password",
                    type: "varchar",
                    isPrimary: false,
                    length: "100",
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users"); // forma pra desfazer as alterações da migration
    }
}
exports.CreateUserTable1779815565535 = CreateUserTable1779815565535;
// quando rodado o comando apenas o up é executado
// o down existe como execução alternativa pra desfazer as alterações da migration
//# sourceMappingURL=1779815565535-CreateUserTable.js.map