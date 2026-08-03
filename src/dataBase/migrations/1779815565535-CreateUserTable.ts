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
            name: "userId",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "userName", //nome
            type: "varchar", // tipo
            length: "255", //tamanho maximo do
            isNullable: false, // não permite ser nulo
          },
          {
            name: "userEmail", //nome
            type: "varchar", // tipo
            isUnique: true,
            length: "255", //tamanho maximo do
            isNullable: false, // não permite ser nulo
          },
          {
            name: "userPassword",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "userRole",
            enum: ["client", "admin"],
            type: "enum",
            isNullable: false,
            default: `'${UserRole.CLIENT}'`,
          },
          {
            name: "userPasswordIv",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "userPasswordAuthTag",
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
