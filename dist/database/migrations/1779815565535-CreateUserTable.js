"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1779815565535 = void 0;
const typeorm_1 = require("typeorm");
const user_table_enum_1 = require("../../common/enums/user.table.enum");
// querry runner é o executador de codigos sql
class CreateUserTable1779815565535 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "user",
            columns: [
                {
                    name: "user_id",
                    type: "uuid",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                },
                {
                    name: "user_name", //nome
                    type: "varchar", // tipo
                    length: "255", //tamanho maximo do
                    isNullable: false, // não permite ser nulo
                },
                {
                    name: "user_email", //nome
                    type: "varchar", // tipo
                    isUnique: true,
                    length: "255", //tamanho maximo do
                    isNullable: false, // não permite ser nulo
                },
                {
                    name: "user_password",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "user_role",
                    enum: ["client", "admin"],
                    type: "enum",
                    isNullable: false,
                    default: `'${user_table_enum_1.UserRole.CLIENT}'`,
                },
                {
                    name: "user_password_iv",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "user_password_auth_tag",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user"); // forma pra desfazer as alterações da migration
    }
}
exports.CreateUserTable1779815565535 = CreateUserTable1779815565535;
// quando rodado o comando apenas o up é executado
// o down existe como execução alternativa pra desfazer as alterações da migration
//# sourceMappingURL=1779815565535-CreateUserTable.js.map