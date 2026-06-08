import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserCreateOutputDto } from "../dto/user-create.dto";
export default class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(res: Response): Promise<Response>;
    createUser(req: Request): Promise<UserCreateOutputDto>;
}
//# sourceMappingURL=user.controller.d.ts.map