import { IUserRegisterInput, IUserLoginInput } from './IAtributesInput/IOrganizationInput';
import { IUserOutput, IUserLoginOutput, IUserRegisterOutput } from './IAtributesOutput/IOrganizationOutput';
interface IUserRepository {
    getUsers(): Promise<IUserOutput[]>;
    registerUser(user: IUserRegisterInput): Promise<IUserRegisterOutput>;
    loginUser(user: IUserLoginInput): Promise<IUserLoginOutput>;
}
export default IUserRepository;
//# sourceMappingURL=IUserRepository.d.ts.map