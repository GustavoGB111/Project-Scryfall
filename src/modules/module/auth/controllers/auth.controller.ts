import { injectable, inject } from "tsyringe";
import { AuthService } from "../services/auth.service";
import { Request, Response } from "express";
import { forgotPasswordInputDto } from "../dto/controller&service.dto/forgot-password.dto";
import { SendPinInputDto } from "../dto/controller&service.dto/send-pin.dto";
import { ResetPassworInputDto } from "../dto/controller&service.dto/reset-password.dto";
import { UserCreateInputDto } from "../dto/controller&service.dto/user-create.dto";
import { LoginInputDto } from "../dto/controller&service.dto/login.dto";

@injectable()
export default class AuthController {
  constructor(
    @inject("AuthService")
    private readonly authService: AuthService,
  ) {}

  /**
   * @swagger
   * /auth/create:
   *   post:
   *     summary: Cria um novo usuário
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - name
   *               - email
   *               - password
   *             properties:
   *               name:
   *                 type: string
   *                 example: "Gustavo"
   *               email:
   *                 type: string
   *                 format: email
   *                 example: "email@email.com"
   *               password:
   *                 type: string
   *                 format: password
   *                 example: "senha123"
   *     responses:
   *       201:
   *         description: Usuário criado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                 response:
   *                   type: object
   *                   properties:
   *                     email:
   *                       type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro interno do servidor
   */
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserCreateInputDto = {
        userEmail: req.body.email,
        userName: req.body.name,
        userPassword: req.body.password,
      };

      const response = await this.authService.registerUser(input);

      return res.status(201).json({
        message: "Usuário criado com sucesso",
        response,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }

  /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Faz login do usuário
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *                 example: "email@email.com"
   *               password:
   *                 type: string
   *                 format: password
   *                 example: "senha123"
   *     responses:
   *       200:
   *         description: Usuário logado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                 response:
   *                   type: object
   *                   properties:
   *                     token:
   *                       type: string
   *                     user:
   *                       type: object
   *                       properties:
   *                         userId:
   *                             type: string
   *                         userName:
   *                             type: string
   *                         userEmail:
   *                             type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro interno do servidor
   */
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const input: LoginInputDto = {
        userEmail: req.body.email,
        userPassword: req.body.password,
      };

      const response = await this.authService.login(input);

      return res
        .status(200)
        .json({ message: "User logado com sucesso", response });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }

  /**
   * @swagger
   * /auth/pin/request:
   *   put:
   *     summary: Envia um pin ao email
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *                 example: "email@email.com"
   *     responses:
   *       200:
   *         description: Pin enviado
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                 response:
   *                   type: object
   *                   properties:
   *                     userEmail:
   *                       type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro interno do servidor
   */
  async requestPin(req: Request, res: Response): Promise<Response> {
    try {
      const input: forgotPasswordInputDto = {
        userEmail: req.body.email,
      };

      const response = await this.authService.requestPin(input);

      return res.status(200).json({ message: "Pin enviado", response });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }

  /**
   * @swagger
   * /auth/pin/send:
   *   put:
   *     summary: Faz a comparação do pin
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - pin
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *                 example: "email@email.com"
   *               pin:
   *                 type: string
   *                 example: "123456"
   *     responses:
   *       200:
   *         description: Pin correto
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                 response:
   *                   type: object
   *                   properties:
   *                     token:
   *                       type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro interno do servidor
   */
  async sendPin(req: Request, res: Response): Promise<Response> {
    try {
      const input: SendPinInputDto = {
        userEmail: req.body.email,
        userPin: req.body.pin,
      };

      const response = await this.authService.sendPin(input);

      return res.status(200).json({ message: "Pin correto", response });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }

  /**
   * @swagger
   * /auth/pin/reset/password:
   *   put:
   *     summary: Altera a senha
   *     tags: [Auth]
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         required: true
   *         description: Token JWT no formato Bearer
   *         schema:
   *           type: string
   *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - password
   *               - passwordConfirm
   *             properties:
   *               password:
   *                 type: string
   *                 example: "senhanova"
   *               passwordConfirm:
   *                 type: string
   *                 example: "senhanova"
   *     responses:
   *       200:
   *         description: Senha alterada com sucesso
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro interno do servidor
   */
  async resetPassword(req: Request, res: Response): Promise<Response> {
    try {
      const input: ResetPassworInputDto = {
        userId: req.userId,
        userPassword: req.body.password,
        userConfirmPassword: req.body.passwordConfirm,
      };

      await this.authService.resetPassword(input);

      return res.status(200).json({ message: "Senha alterada com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }
}
