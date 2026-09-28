import { IsString, IsNotEmpty, IsUUID } from "class-validator";

export class getPinInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getPinUsedOutputDto {
  pinUsed!: boolean;
}
