import { IsString, IsUUID, IsNotEmpty, IsOptional } from "class-validator";

export class GetCardInputDto {
  @IsOptional()
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  id?: string;

  @IsOptional()
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  name?: string;
}
