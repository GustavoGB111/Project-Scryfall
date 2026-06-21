import { Request, Response } from "express";
import { UserService } from "../services/user.service";
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(req: Request, res: Response): Promise<Response>;
    getUser(req: Request, res: Response): Promise<Response>;
    createUser(req: Request, res: Response): Promise<Response>;
    loginUser(req: Request, res: Response): Promise<Response>;
    updateUserName(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=user.controller.d.ts.map