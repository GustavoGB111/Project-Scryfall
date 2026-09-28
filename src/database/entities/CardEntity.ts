import { Entity, Column, PrimaryColumn } from "typeorm";
import { cardRarity } from "../../common/enums/card.rarity.enum";
import { CardImageUris } from "./dto/cardImageUris.dto";
import { CardPrices } from "./dto/cardPrices.dto";

@Entity("card")
export class CardEntity {
  @PrimaryColumn("uuid", { nullable: false, unique: true })
  id!: string;

  @Column("varchar", { length: 255, nullable: false })
  name!: string;

  @Column("varchar", { length: 255, nullable: true })
  mana_cost!: string | null;

  @Column("float", { nullable: false })
  cmc!: number;

  @Column("varchar", { length: 255, nullable: false })
  type_line!: string;

  @Column("text", { nullable: true })
  oracle_text!: string | null;

  @Column("varchar", { nullable: true, array: true })
  colors!: string[] | null;

  @Column("varchar", { nullable: true, array: true })
  color_identity!: string[] | null;

  @Column("varchar", { length: 255, nullable: false })
  set_code!: string;

  @Column("varchar", { length: 255, nullable: false })
  set_name!: string;

  @Column("varchar", { length: 255, nullable: false })
  collector_number!: string;

  @Column("enum", { enum: cardRarity, nullable: false })
  rarity!: cardRarity;

  @Column("json", { nullable: true })
  image_uris!: CardImageUris | null;

  @Column("json", { nullable: true })
  prices!: CardPrices | null;

  @Column("varchar", { length: 255, nullable: true })
  scryfall_uri!: string | null;
}
