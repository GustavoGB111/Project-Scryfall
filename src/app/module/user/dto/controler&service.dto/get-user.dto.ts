import { IsString, IsUUID, IsNotEmpty } from "class-validator";

export class getOneUserInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getOneUserOutputDto {
  userId!: string;
  userName!: string;
  userEmail!: string;
  userRole!: string;
}
