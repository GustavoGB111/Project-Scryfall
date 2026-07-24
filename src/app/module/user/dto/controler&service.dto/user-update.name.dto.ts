import {
  IsNumber,
  IsString,
  IsNotEmpty,
  MinLength,
  Min,
  IsUUID,
} from "class-validator";

export class UserUpdateNameInputDto {
  @IsUUID("4", { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(3, { message: "O campo deve ter no mínimo 3 caracteres" })
  userName!: string;
}

export abstract class UserUpdateNameOutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(3, { message: "O campo deve ter no mínimo 3 caracteres" })
  userName!: string;
}
