import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserPinTable1784116481503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_pin"); // forma pra desfazer as alterações da migration
  }
}
