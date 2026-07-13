import { MigrationInterface, QueryRunner, Table } from "typeorm";
// querry runner é o executador de codigos sql
export class CreateUserTable1779815565535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_pin",
        columns: [
          {
            name: "email",
            type: "varchar",
            isPrimary: true,
            length: "100",
            isNullable: false,
          },
          {
            name: "pin",
            type: "varchar",
            isPrimary: false,
            isNullable: false,
            length: "100",
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users"); // forma pra desfazer as alterações da migration
  }
}

// quando rodado o comando apenas o up é executado
// o down existe como execução alternativa pra desfazer as alterações da migration
