import { IsString, IsUUID, IsNotEmpty } from "class-validator";

export class userDeleteInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class userDeleteOutputDto {
  affected: number | null | undefined;
}
