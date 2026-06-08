import { Repository } from "typeorm";
import { IUserRegisterInput, IUserLoginInput } from "../interfaces/UserInterface/IAtributesInput/IOrganizationInput";
import { IUserOutput, IUserLoginOutput, IUserRegisterOutput } from "../interfaces/UserInterface/IAtributesOutput/IOrganizationOutput";
import IUserRepository from "../interfaces/UserInterface/IUserRepository";
import { UserEntity } from "../entities/UserEntity";
export declare class UserRepository implements IUserRepository {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getUsers(): Promise<IUserOutput[]>;
    registerUser(userRegisterInputData: IUserRegisterInput): Promise<IUserRegisterOutput>;
    getUser(userLoginInputData: IUserLoginInput): Promise<IUserLoginOutput>;
}
//# sourceMappingURL=UserRepository.d.ts.map