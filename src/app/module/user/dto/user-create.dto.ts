export interface UserCreateInputDto {
  name: string;
  email: string;
  password: string;
}

export interface UserCreateOutputDto {
  email: string;
}
