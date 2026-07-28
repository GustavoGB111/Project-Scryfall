import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";
import { getOneUserInputDto } from "../dto/controler&service.dto/get-user.dto";
import { Request, Response } from "express";
import { deleteOneUserInputDto } from "../dto/controler&service.dto/delete-user.dto";
import { updateUserNameInputDto } from "../dto/controler&service.dto/update-user.dto";

@injectable() // serve para que permita q a classe seja injetável (decorator)
export default class UserController {
  constructor(
    @inject("UserService") // indica q está sendo utilizado um injetavel aqui
    private readonly userService: UserService,
  ) {}

  /**
   * @swagger
   * /user/get/me:
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

  /**
   * @swagger
   * /user/delete/me:
   *   delete:
   *     summary: Deleta o registro do user que requisitou a rota
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
   *       200:
   *         description: Usuário deletado
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro no servidor.
   */
  async deleteUserMe(req: Request, res: Response): Promise<Response> {
    try {
      const input: deleteOneUserInputDto = {
        userId: req.userId,
      };

      await this.userService.deleteUserMe({
        userId: input.userId,
      });

      return res.status(200).json({ message: "Usuário deletado" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro Interno",
      });
    }
  }

  /**
   * @swagger
   * /user/updateName/me:
   *   put:
   *     summary: Deleta o registro do user que requisitou a rota
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
   *               name:
   *                 type: string
   *                 example: "José Maria"
   *     responses:
   *       200:
   *         description: Usuário atualizado
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro no servidor.
   */
  async updateUserNameMe(req: Request, res: Response): Promise<Response> {
    try {
      const input: updateUserNameInputDto = {
        userId: req.userId,
        newName: req.body.name,
      };

      await this.userService.updateUserNameMe({
        userId: input.userId,
        newName: input.newName,
      });

      return res.status(200).json({ message: "Usuário atualizado" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro Interno",
      });
    }
  }
}
