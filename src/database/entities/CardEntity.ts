import { Entity, Column, PrimaryColumn } from "typeorm";
import { cardRarity } from "../../common/enums/card.rarity.enum";
import { CardImageUris } from "./dto/cardImageUris.dto";
import { CardPrices } from "./dto/cardPrices.dto";

@Entity("card")
export class CardEntity {
  @PrimaryColumn("uuid", { name: "card_id" })
  cardId!: string;

  @Column("varchar", { name: "name", length: 255, nullable: false })
  cardName!: string;

  @Column("varchar", { name: "mana_cost", length: 255, nullable: true })
  cardManaCost?: string;

  @Column("float", { name: "cmc", nullable: false })
  cardCMC!: number;

  @Column("varchar", { name: "type_line", length: 255, nullable: false })
  cardTypeLine!: string;

  @Column("text", { name: "oracle_text", nullable: true })
  cardOracleText?: string;

  @Column("varchar", { name: "colors", nullable: true, array: true })
  cardColors?: string[];

  @Column("varchar", { name: "color_identity", nullable: true, array: true })
  cardColorIdentity?: string[];

  @Column("varchar", { name: "set_code", length: 255, nullable: false })
  cardSet!: string;

  @Column("varchar", { name: "set_name", length: 255, nullable: false })
  cardSetName!: string;

  @Column("varchar", { name: "collector_number", length: 255, nullable: false })
  cardCollectorNumber!: string;

  @Column("enum", { name: "rarity", enum: cardRarity, nullable: false })
  cardRarity!: cardRarity;

  @Column("json", { name: "image_uris", nullable: true })
  cardImageUris?: CardImageUris;

  @Column("json", { name: "prices", nullable: true })
  cardPrices?: CardPrices;

  @Column("varchar", { name: "scryfall_uri", length: 255, nullable: true })
  cardScryfallUri?: string;
}
