import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { cardRarity } from "../../common/enums/card.rarity.enum";

export class CreateCardTable1786639921305 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
            enum: Object.values(cardRarity), // pega apenas o valor
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
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
