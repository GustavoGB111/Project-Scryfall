import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";
import {
  getOneUserInputDto,
  getYourUserInputDto,
  getYourUserOutputDto,
} from "../dto/controler&service.dto/get-user.dto";
import { Request, Response } from "express";
import {
  deleteOneUserInputDto,
  deleteYourUserInputDto,
} from "../dto/controler&service.dto/delete-user.dto";
import {
  updateAnyUserRoleInputDto,
  updateUserNameInputDto,
} from "../dto/controler&service.dto/update-user.dto";
import { UserRole } from "../../../../common/enums/user.table.enum";

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
   *                 example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VyRW1haWwiOiJndXN0YXZvQGVtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc1MzgwMDAwMCwiZXhwIjoxNzUzODAzNjAwfQ.dQw4w9WgXcQ8yM9L2P3K5N7R8S1T4V6Y8Z0A1B2C3D4"
   *     responses:
   *       200:
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
   *                     role:
   *                       type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro no servidor.
   */
  async getUserMe(req: Request, res: Response): Promise<Response> {
    try {
      const input: getYourUserInputDto = {
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
   *                 example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VyRW1haWwiOiJndXN0YXZvQGVtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc1MzgwMDAwMCwiZXhwIjoxNzUzODAzNjAwfQ.dQw4w9WgXcQ8yM9L2P3K5N7R8S1T4V6Y8Z0A1B2C3D4"
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
      const input: deleteYourUserInputDto = {
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
   *                 example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VyRW1haWwiOiJndXN0YXZvQGVtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc1MzgwMDAwMCwiZXhwIjoxNzUzODAzNjAwfQ.dQw4w9WgXcQ8yM9L2P3K5N7R8S1T4V6Y8Z0A1B2C3D4"
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

  /**
   * @swagger
   * /user/get/any:
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
   *               - role
   *             properties:
   *               token:
   *                 type: string
   *                 example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VyRW1haWwiOiJndXN0YXZvQGVtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc1MzgwMDAwMCwiZXhwIjoxNzUzODAzNjAwfQ.dQw4w9WgXcQ8yM9L2P3K5N7R8S1T4V6Y8Z0A1B2C3D4"
   *               id:
   *                 type: string
   *                 example: "550e8400-e29b-41d4-a716-446655440000"
   *               role:
   *                 type: string
   *                 example: "admin"
   *     responses:
   *       200:
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
   *                     role:
   *                       type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro no servidor.
   */
  async getOneUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: getOneUserInputDto = {
        yourUserId: req.userId,
        userId: req.body.userId,
        userRole: req.userRole,
      };

      const response = await this.userService.getOneUser({
        yourUserId: input.yourUserId,
        userId: input.userId,
        userRole: input.userRole,
      });

      return res.status(200).json({ message: "Usuário encontrado", response });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro Interno",
      });
    }
  }

  /**
   * @swagger
   * /user/delete/any:
   *   delete:
   *     summary: Deleta qualquer usuário
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - token
   *               - role
   *             properties:
   *               token:
   *                 type: string
   *                 example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VyRW1haWwiOiJndXN0YXZvQGVtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc1MzgwMDAwMCwiZXhwIjoxNzUzODAzNjAwfQ.dQw4w9WgXcQ8yM9L2P3K5N7R8S1T4V6Y8Z0A1B2C3D4"
   *               id:
   *                 type: string
   *                 example: "550e8400-e29b-41d4-a716-446655440000"
   *               role:
   *                 type: string
   *                 example: "admin"
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
  async deleteOneUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: deleteOneUserInputDto = {
        yourUserId: req.userId,
        userId: req.body.userId,
        userRole: req.userRole,
      };

      await this.userService.deleteOneUser(input);

      return res.status(200).json({ message: "Usuário deletado" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro Interno",
      });
    }
  }

  /**
   * @swagger
   * /user/updateRole/any:
   *   put:
   *     summary: Aatualiza a Role de qualquer usuário
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - token
   *               - role
   *             properties:
   *               token:
   *                 type: string
   *                 example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VyRW1haWwiOiJndXN0YXZvQGVtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc1MzgwMDAwMCwiZXhwIjoxNzUzODAzNjAwfQ.dQw4w9WgXcQ8yM9L2P3K5N7R8S1T4V6Y8Z0A1B2C3D4"
   *               id:
   *                 type: string
   *                 example: "550e8400-e29b-41d4-a716-446655440000"
   *               role:
   *                 type: string
   *                 example: "admin"
   *               userUpDown:
   *                 type: string
   *                 example: "up"
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
  async updateOneUserRole(req: Request, res: Response): Promise<Response> {
    try {
      const input: updateAnyUserRoleInputDto = {
        yourUserId: req.userId,
        userId: req.body.id,
        userRole: req.userRole,
        userUpDown: req.body.userUpDown,
      };

      await this.userService.modifyUserRole(input);

      return res.status(200).json({ message: "Usuário atualizado" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro Interno",
      });
    }
  }
}
