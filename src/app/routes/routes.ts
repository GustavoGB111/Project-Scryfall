import { Router } from 'express';
import userRouter from '../controllers/UserController';
import publicRouter from '../controllers/public';

const routers = Router()

routers.use('/users', userRouter);
routers.use('/users', publicRouter);

export default routers