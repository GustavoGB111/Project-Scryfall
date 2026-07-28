import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";
import { getOneUserInputDto } from "../dto/controler&service.dto/get-user.dto";
import { Request, Response } from "express";

@injectable() // serve para que permita q a classe seja injetável (decorator)
export default class UserController {
  constructor(
    @inject("UserService") // indica q está sendo utilizado um injetavel aqui
    private readonly userService: UserService,
  ) {}

  /**
   * @swagger
   * /user/me:
   *   put:
   *     summary: Retorna os dados do user que requisitou a rota
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - token
   *             properties:
   *               token:
   *                 type: string
   *                 example: "550e8400-e29b-41d4-a716-446655440000"
   *     responses:
   *       201:
   *         description: Usuário encontrado
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
   *                     id:
   *                       type: string
   *                     nome:
   *                       type: string
   *                     email:
   *                       type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro no servidor.
   */
  async getUserMe(req: Request, res: Response): Promise<Response> {
    try {
      const input: getOneUserInputDto = {
        userId: req.userId,
      };

      const user = await this.userService.getUserMe({ userId: input.userId });

      return res.status(200).json({ message: "Usuário encontrado", user });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro Interno",
      });
    }
  }
}
