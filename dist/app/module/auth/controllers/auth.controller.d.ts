import { AuthService } from "../services/auth.service";
import { Request, Response } from "express";
export default class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(req: Request, res: Response): Promise<Response>;
    login(req: Request, res: Response): Promise<Response>;
    requestPin(req: Request, res: Response): Promise<Response>;
    sendPin(req: Request, res: Response): Promise<Response>;
    resetPassword(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=auth.controller.d.ts.map