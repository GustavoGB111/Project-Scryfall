import { UserEntity } from "../../../../../database/entities/UserEntity";
import {
  userDeleteInputDto,
  userDeleteOutputDto,
} from "../../dto/repository.dto/delete-user.dto";
import { userGetOneInputDto } from "../../dto/repository.dto/get-user.dto";
import {
  userUpdateInputDto,
  userUpdateOutputDto,
} from "../../dto/repository.dto/update-user.dto";

export default abstract class IUserRepository {
  abstract getUser(input: userGetOneInputDto): Promise<UserEntity | null>;
  abstract getAllUser(): Promise<UserEntity[]>;
  abstract deleteUser(input: userDeleteInputDto): Promise<userDeleteOutputDto>;
  abstract updateUser(input: userUpdateInputDto): Promise<userUpdateOutputDto>;
}
