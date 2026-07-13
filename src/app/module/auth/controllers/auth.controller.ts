import { injectable, inject } from "tsyringe";
import { AuthService } from "../services/auth.service";
import { Request, Response } from "express";
import { UserCreateInputDto } from "../dto/repository.dto/user-create.dto";
import {
  forgotPasswordInputDto,
  ResetPassworInputDto,
  SendPinInputDto,
} from "../dto/controller&service.dto/forgot-password.dto";

@injectable()
export default class AuthController {
  constructor(
    @inject("AuthService")
    private readonly authService: AuthService,
  ) {}

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserCreateInputDto = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      };

      const { email } = await this.authService.registerUser(input);

      return res.status(201).json(email);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserCreateInputDto = {
        email: req.body.email,
        name: req.body.email,
        password: req.body.password,
      };

      await this.authService.login(input);

      return res.status(200).json({ message: "User logado com sucesso" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async requestPin(req: Request, res: Response): Promise<Response> {
    try {
      const input: forgotPasswordInputDto = {
        email: req.body.email,
      };

      await this.authService.requestPin(input);

      return res.status(200).json();
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async sendPin(req: Request, res: Response): Promise<Response> {
    try {
      const input: SendPinInputDto = {
        email: req.body.email,
        pin: req.body.pin,
      };

      await this.authService.sendPin(input);

      return res.status(200).json({ message: "Pin aceito" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async resetPassword(req: Request, res: Response): Promise<Response> {
    try {
      const input: ResetPassworInputDto = {
        email: req.userEmail,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
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
