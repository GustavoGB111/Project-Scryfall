import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  getOneUserInputDto,
  getOneUserOutputDto,
} from "../dto/controler&service.dto/get-user.dto";
import { validateErros } from "../../../../common/validate.erros";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository,
  ) {}

  async getUserMe(input: getOneUserInputDto): Promise<getOneUserOutputDto> {
    try {
      validateErros(getOneUserInputDto, input);

      const user = await this.userRepository.getUser({ userId: input.userId });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const { userPassword, userPasswordIv, userPasswordAuthTag, ...result } =
        user;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
