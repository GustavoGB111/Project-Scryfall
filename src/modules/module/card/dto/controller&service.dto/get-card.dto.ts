import { IsUUID, IsString, IsNotEmpty } from "class-validator";

export class GetCardInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  cardId?: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  cardName?: string;
}
