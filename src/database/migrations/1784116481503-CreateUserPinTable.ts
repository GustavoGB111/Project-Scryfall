import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserPinTable1784116481503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_pin",
        columns: [
          {
            name: "pin_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            generationStrategy: "uuid",
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "user_pin",
            type: "varchar",
            isNullable: false,
            length: "255",
          },
          {
            name: "user_pin_iv",
            type: "varchar",
            isNullable: false,
            length: "255",
          },
          {
            name: "user_pin_auth_tag",
            type: "varchar",
            isNullable: false,
            length: "255",
          },
          {
            name: "pins_expired_at",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "pins_requested",
            type: "integer",
            default: 0,
          },
          {
            name: "pins_requested_reset_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "pin_used",
            type: "boolean",
            isNullable: false,
            default: false,
          },
          {
            name: "password_reseted",
            type: "boolean",
            isNullable: false,
            default: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["user_id"],
            referencedTableName: "user",
            referencedColumnNames: ["user_id"],
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
