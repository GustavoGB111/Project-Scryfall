import { injectable, inject } from "tsyringe";
import { AuthService } from "../services/auth.service";
import { Request, Response } from "express";
import {
  forgotPasswordInputDto,
  ResetPassworInputDto,
  SendPinInputDto,
} from "../dto/controller&service.dto/forgot-password.dto";
import { UserCreateInputDto } from "../dto/controller&service.dto/user-create.dto";
import { LoginInputDto } from "../dto/controller&service.dto/login.dto";

@injectable()
export default class AuthController {
  constructor(
    @inject("AuthService")
    private readonly authService: AuthService,
  ) {}

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserCreateInputDto = {
        userEmail: req.body.userEmail,
        userName: req.body.userName,
        userPassword: req.body.userPassword,
      };

      const { userEmail } = await this.authService.registerUser(input);

      return res.status(201).json(userEmail);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const input: LoginInputDto = {
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
      };

      const response = await this.authService.login(input);

      return res
        .status(200)
        .json({ response, message: "User logado com sucesso" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async requestPin(req: Request, res: Response): Promise<Response> {
    try {
      const input: forgotPasswordInputDto = {
        userEmail: req.body.userEmail,
      };

      const response = await this.authService.requestPin(input);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async sendPin(req: Request, res: Response): Promise<Response> {
    try {
      const input: SendPinInputDto = {
        userEmail: req.body.userEmail,
        userPin: req.body.userPin,
      };

      const response = await this.authService.sendPin(input);

      return res.status(200).json({ response, message: "Pin aceito" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async resetPassword(req: Request, res: Response): Promise<Response> {
    try {
      const input: ResetPassworInputDto = {
        userId: req.userId,
        userPassword: req.body.userPassword,
        userConfirmPassword: req.body.userConfirmPassword,
      };

      await this.authService.resetPassword(input);

      return res.status(200).json({ message: "Senha alterada com sucesso" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }
}
