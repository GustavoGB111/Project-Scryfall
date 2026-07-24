import { Repository } from "typeorm";
import IAuthRepository from "./interfaces/auth.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { UserPinEntity } from "../../../entities/UserPinEntity";
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
import { getPinInputDto } from "../dto/repository.dto/pin-get-dto";
import {
  UserRequestPinInputDto,
  UserRequestPinOutputDto,
} from "../dto/repository.dto/pin-request.dto";
import {
  pinUpdateInputDto,
  pinUpdateOutputDto,
} from "../dto/repository.dto/pin-update.dto";

export class AuthRepository extends IAuthRepository {
  private userRepository: Repository<UserEntity>;
  private userPinRepository: Repository<UserPinEntity>;
  constructor() {
    super();
    this.userPinRepository = AppDataSource.getRepository(UserPinEntity); // indicação de q irá ser utilizado o repositorio
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  // criar usuário
  async createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto> {
    const user = await this.userRepository.create(input);
    const { userEmail } = await this.userRepository.save(user);
    return { userEmail };
  }

  // get em todos os usuários
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  // get em um unico usuário
  async getOneUser(input: UserGetOneInputDto): Promise<UserEntity | null> {
    return await this.userRepository.findOne({
      where: { userEmail: input.userEmail },
    });
  }

  // update em um unico usuário
  async updateUserPassword(
    input: UserUpdatePasswordInputDto,
  ): Promise<UserUpdatePasswordOutputDto> {
    const { affected } = await this.userRepository.update(
      { userId: input.userId },
      {
        userPassword: input.userPassword,
        userPasswordIv: input.userPasswordIv,
        userPasswordAuthTag: input.userPasswordAuthTag,
      },
    );
    return { affected };
  }

  // get no pin, iv e authtag
  async getOnePin(input: getPinInputDto): Promise<UserPinEntity | null> {
    const user = await this.userPinRepository.findOne({
      where: { userIdPin: { userId: input.userId } },
    });

    return user;
  }

  // criar pin
  async createPin(
    input: UserRequestPinInputDto,
  ): Promise<UserRequestPinOutputDto> {
    const user = await this.userPinRepository.create({
      userIdPin: { userId: input.userId },
      userPin: input.userPin,
      userPinIv: input.userPinIv,
      userPinAuthTag: input.userPinAuthTag,
      pinsRequested: input.pinsRequested,
      pinsRequestedResetAt: input.pinsRequestedResetAt,
      pinsExpiredAt: input.pinsExpiredAt,
      pinUsed: input.pinUsed,
      passwordReseted: input.passwordReseted,
    });
    const { userIdPin } = await this.userPinRepository.save(user);
    return { userId: userIdPin.userId };
  }

  // update nas informações: userPin, userPinIv, userPinAuthtag, pinUsed, passwordReseted
  async updatePin(input: pinUpdateInputDto): Promise<pinUpdateOutputDto> {
    const getUser = await this.getOnePin({ userId: input.userId });
    if (!getUser) {
      const affected = 0;
      return { affected };
    }
    const { affected } = await this.userPinRepository.update(
      { userIdPin: { userId: input.userId } },
      {
        pinsRequested: input.pinsRequested ?? getUser.pinsRequested,
        pinsRequestedResetAt:
          input.pinsRequestedResetAt ?? getUser.pinsRequestedResetAt,
        pinsExpiredAt: input.pinsExpiredAt ?? getUser.pinsExpiredAt,
        userPin: input.userPin ?? getUser.userPin,
        userPinIv: input.userPinIv ?? getUser.userPinIv,
        userPinAuthTag: input.userPinAuthTag ?? getUser.userPinAuthTag,
        pinUsed: input.pinUsed ?? getUser.pinUsed,
        passwordReseted: input.passwordReseted ?? getUser.passwordReseted,
      },
    );
    return { affected };
  }
}
