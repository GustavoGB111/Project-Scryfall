import { IsNotEmpty, IsUUID } from "class-validator";

export class UserDeleteInputDto {
  @IsUUID("4", { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}
