import { Repository } from "typeorm";
import IAuthRepository from "./interfaces/auth.repository.interface";
import { UserEntity, UserEntityPin } from "../../../entities/UserEntity";
import { AppDataSource } from "../../../../DB/databaseConexion";
import {
  UserCreateInputDto,
  UserCreateOutputDto,
} from "../dto/repository.dto/user-create.dto";
import { UserGetOneInputDto } from "../dto/repository.dto/user-get.dto";
import {
  UserUpdatePasswordInputDto,
  UserUpdatePasswordOutputDto,
} from "../dto/repository.dto/user-update-password.dto";
import {
  getPinInputDto,
  getPinOutputDto,
} from "../dto/repository.dto/pin-get-dto";
import {
  UserRequestPinInputDto,
  UserRequestPinOutputDto,
} from "../dto/repository.dto/pin-request.dto";
import {
  pinDeleteInputDto,
  pinDeleteOutputDto,
} from "../dto/repository.dto/pin-delete.dto";

export class AuthRepository extends IAuthRepository {
  private userRepository: Repository<UserEntity>;
  private userPinRepository: Repository<UserEntityPin>;
  constructor() {
    super();
    this.userPinRepository = AppDataSource.getRepository(UserEntityPin); // indicação de q irá ser utilizado o repositorio
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  async createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto> {
    const user = await this.userRepository.create(input);
    return await this.userRepository.save(user);
  }

  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async getOneUser(input: UserGetOneInputDto): Promise<UserEntity | null> {
    return await this.userRepository.findOne({ where: { email: input.email } });
  }

  async updateUserPassword(
    input: UserUpdatePasswordInputDto,
  ): Promise<UserUpdatePasswordOutputDto> {
    const { affected } = await this.userRepository.update(
      { email: input.email },
      { password: input.password },
    );
    return { affected };
  }

  async getOneRequestPin(
    input: getPinInputDto,
  ): Promise<getPinOutputDto | null> {
    const user = await this.userPinRepository.findOne({
      where: { email: input.email },
      select: { pin: true },
    });
    return user;
  }

  async requestPin(
    input: UserRequestPinInputDto,
  ): Promise<UserRequestPinOutputDto> {
    const user = await this.userPinRepository.create(input);
    return await this.userPinRepository.save(user);
  }

  async deletePin(input: pinDeleteInputDto): Promise<pinDeleteOutputDto> {
    const { affected } = await this.userPinRepository.delete({
      email: input.email,
    });
    return { affected };
  }
}
