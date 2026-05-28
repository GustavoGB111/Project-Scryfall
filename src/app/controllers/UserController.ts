import { Request, Response, Router } from 'express';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/IUsers';

const userRouter = Router(); 
// significa que estamos usando uma variavel q representa o express e possibilita o uso de get, post, put, etc...

userRouter.get('/', async (req: Request, res: Response):Promise<Response> => {
    try {
        const users = await UserRepository.getUsers();
        return res.status(200).json(users);        
    } catch (error) {
        return res.status(500).json({message: "Erro no servidor"});    
    }
});

export default userRouter;