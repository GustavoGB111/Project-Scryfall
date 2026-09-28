import {
  IsString,
  IsUUID,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  ArrayNotEmpty,
  IsObject,
  IsEnum,
  isString,
} from "class-validator";
import { cardRarity } from "../../../../../common/enums/card.rarity.enum";

class ImageUris {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  small!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  normal!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  large!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  png!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  art_crop!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  border_crop!: string;
}

export class Prices {
  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  usd?: string | null;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  usd_foil?: string | null;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  usd_etched?: string | null;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  eur?: string | null;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  eur_foil?: string | null;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  tix?: string | null;
}

export class CreateCardInputDto {
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  id!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  name!: string;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  mana_cost?: string;

  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  cmc!: number;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  type_line!: string;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  oracle_text?: string;

  @IsOptional()
  @IsArray({ message: "Colors deve ser uma lista" })
  @IsString({ each: true, message: "Cada cor deve ser uma string" })
  @ArrayNotEmpty({ message: "O campo não pode ser vazio" })
  colors?: string[];

  @IsArray({ message: "Colors deve ser uma lista" })
  @IsString({ each: true, message: "Cada cor deve ser uma string" })
  @ArrayNotEmpty({ message: "O campo não pode ser vazio" })
  color_identity!: string[];

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  set_code!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  set_name!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  collector_number!: string;

  @IsEnum(cardRarity, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  rarity!: cardRarity;

  @IsOptional()
  @IsObject({ message: "O tipo de dado é inválido" })
  image_uris?: ImageUris;

  @IsOptional()
  @IsObject({ message: "O tipo de dado é inválido" })
  prices!: Prices;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  scryfall_uri!: string;
}
