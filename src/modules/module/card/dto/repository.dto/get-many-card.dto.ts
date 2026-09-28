import { IsUUID, IsNotEmpty, IsOptional } from "class-validator";

export class GetManyCardsInputDto {
  @IsOptional()
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  id!: string;
}
