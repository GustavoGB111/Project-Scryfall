import User from "../entities/User";
import IUser from "../interfaces/IUsers";
import { AppDataSource } from "../../DB/databaseConexion";

// o getRepository é a ferramenta que permite a utilização do banco de dados
const userRepository = AppDataSource.getRepository(User); // Utiliza User pra dizer em qual tabela deve procurar 

const getUsers = (): Promise<IUser[]> => { // indica que vai retornar uma promisse de array da tabela user no modelo da IUser
    return userRepository.find(); // método de procura
};

export default { getUsers };