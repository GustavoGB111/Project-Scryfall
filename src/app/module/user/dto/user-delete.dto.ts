import { IsNumber, IsNotEmpty, Min } from "class-validator";

export class UserDeleteInputDto {
  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @Min(1, { message: "O valor deve ser no mínimo 1" })
  id!: number;
}

export abstract class UserDeleteOutputDto {
  affected!: number | null | undefined;
}
