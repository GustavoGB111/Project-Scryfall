import { UserEntity } from "../../../../entities/UserEntity";
import { UserCreateInputDto } from "../../dto/user-create.dto";
import {
  UserUpdateNameInputDto,
  UserUpdateNameOutputDto,
} from "../../dto/user-update.name.dto";
import { UserUpdatePasswordInputDto } from "../../dto/user-update.password.dto";
import { UserGetOneInputDto } from "../../dto/user-get.dto";

export default abstract class IUserRepository {
  abstract getAll(): Promise<UserEntity[]>;
  abstract getOne(input: UserGetOneInputDto): Promise<UserEntity | null>;
  abstract createUser(input: UserCreateInputDto): Promise<UserEntity>;
  abstract updateUserPassword(input: UserUpdatePasswordInputDto): Promise<void>;
  abstract updateUserName(
    input: UserUpdateNameInputDto,
  ): Promise<UserUpdateNameOutputDto>;
}
