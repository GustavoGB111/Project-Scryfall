import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { UserRole } from "../../common/enums/user.table.enum";
// querry runner é o executador de codigos sql
export class CreateUserTable1779815565535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
            default: `'${UserRole.CLIENT}'`,
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user"); // forma pra desfazer as alterações da migration
  }
}

// quando rodado o comando apenas o up é executado
// o down existe como execução alternativa pra desfazer as alterações da migration
