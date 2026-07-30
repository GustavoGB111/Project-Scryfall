import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";
import {
  getOneUserInputDto,
  getUsersInputDto,
  getYourUserInputDto,
} from "../dto/controler&service.dto/get-user.dto";
import { Request, Response } from "express";
import {
  deleteOneUserInputDto,
  deleteYourUserInputDto,
} from "../dto/controler&service.dto/delete-user.dto";
import {
  updateAnyUserInputDto,
  updateAnyUserRoleInputDto,
  updateUserMeInputDto,
} from "../dto/controler&service.dto/update-user.dto";

@injectable() // serve para que permita q a classe seja injetável (decorator)
export default class UserController {
  constructor(
    @inject("UserService") // indica q está sendo utilizado um injetavel aqui
    private readonly userService: UserService,
  ) {}

  /**
   * @swagger
   * /user/get/me:
   *   get:
   *     summary: Retorna os dados do user que requisitou a rota
   *     tags: [User]
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         required: true
   *         description: Token JWT no formato Bearer
   *         schema:
   *           type: string
   *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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
   *         description: Erro interno do servidor
   */
  async getUserMe(req: Request, res: Response): Promise<Response> {
    try {
      const input: getYourUserInputDto = {
        userId: req.userId,
      };

      const user = await this.userService.getUserMe({ userId: input.userId });

      return res.status(200).json({ message: "Usuário encontrado", user });
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
   * /user/get/all:
   *   get:
   *     summary: Retorna todos os usuários do sistema
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         required: true
   *         description: Token JWT no formato Bearer
   *         schema:
   *           type: string
   *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   *     tags: [User]
   *     responses:
   *       200:
   *         description: Usuários retornados
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                 response:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       userId:
   *                         type: string
   *                       userName:
   *                         type: string
   *                       userEmail:
   *                         type: string
   *                       userPassword:
   *                         type: string
   *                       userRole:
   *                         type: string
   *                       userPasswordIv:
   *                         type: string
   *                       userPasswordAuthTag:
   *                         type: string
   *       400:
   *         description: (error)
   *       500:
   *         description: Erro interno do servidor
   */
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const input: getUsersInputDto = {
        userId: req.userId,
        userRole: req.userRole,
      };

      const response = await this.userService.getAllUser(input);

      return res.status(200).json({ message: "Usuários: ", response });
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
   * /user/get/any:
   *   put:
   *     summary: Retorna os dados do user que requisitou a rota
   *     tags: [User]
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
   *               - id
   *             properties:
   *               id:
   *                 type: string
   *                 example: "550e8400-e29b-41d4-a716-446655440000"
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
   *         description: Erro interno do servidor
   */
  async getOneUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: getOneUserInputDto = {
        yourUserId: req.userId,
        userId: req.body.id,
        userRole: req.userRole,
      };

      const response = await this.userService.getOneUser({
        yourUserId: input.yourUserId,
        userId: input.userId,
        userRole: input.userRole,
      });

      return res.status(200).json({ message: "Usuário encontrado", response });
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
   * /user/update/me:
   *   put:
   *     summary: Atualiza as informações do usuário
   *     tags: [User]
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
   *               - oldPassword
   *             properties:
   *               oldPassword:
   *                 type: string
   *                 example: "12345678"
   *               newPassword:
   *                 type: string
   *                 example: "12345678"
   *               newPasswordConfirm:
   *                 type: string
   *                 example: "12345678"
   *               newName:
   *                 type: string
   *                 example: "Gustavo"
   *               newEmail:
   *                 type: string
   *                 example: "gustavo@gmail.com"
   *   responses:
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
   *         description: Erro interno do servidor
   */
  async updateUserMe(req: Request, res: Response): Promise<Response> {
    try {
      const input: updateUserMeInputDto = {
        userId: req.userId,
        userOldPassword: req.body.oldPassword,
        userNewPassword: req.body.newPassword,
        userNewPasswordConfirm: req.body.newPasswordConfirm,
        userName: req.body.newName,
        userEmail: req.body.newEmail,
      };

      await this.userService.updateUserMe(input);

      return res.status(200).json({ message: "Usuário atualizado" });
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
   * /user/update/any:
   *   put:
   *     summary: Atualiza as informações de um usuário
   *     tags: [User]
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
   *               - userId
   *             properties:
   *               id:
   *                 type: string
   *                 example: "550e8400-e29b-41d4-a716-446655440000"
   *               newPassword:
   *                 type: string
   *                 example: "12345678"
   *               newPasswordConfirm:
   *                 type: string
   *                 example: "12345678"
   *               newName:
   *                 type: string
   *                 example: "Gustavo"
   *               newEmail:
   *                 type: string
   *                 example: "gustavo@gmail.com"
   *   responses:
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
   *         description: Erro interno do servidor
   */
  async updateOneUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: updateAnyUserInputDto = {
        userId: req.body.id,
        yourUserId: req.userId,
        userRole: req.userRole,
        userNewPassword: req.body.newPassword,
        userNewPasswordConfirm: req.body.newPasswordConfirm,
        userName: req.body.newName,
        userEmail: req.body.newEmail,
      };

      await this.userService.updateOneUser(input);

      return res.status(200).json({ message: "Usuário atualizado" });
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
   * /user/update/role/any:
   *   put:
   *     summary: Atualiza a Role de qualquer usuário
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         required: true
   *         description: Token JWT no formato Bearer
   *         schema:
   *           type: string
   *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - id
   *               - userUpDown
   *             properties:
   *               id:
   *                 type: string
   *                 example: "550e8400-e29b-41d4-a716-446655440000"
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
   *         description: Erro interno do servidor
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
   * /user/delete/me:
   *   delete:
   *     summary: Deleta o registro do user que requisitou a rota
   *     tags: [User]
   *     parameters:
   *       - in: header
   *         name: Authorization
   *         required: true
   *         description: Token JWT no formato Bearer
   *         schema:
   *           type: string
   *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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
   *         description: Erro interno do servidor
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
   * /user/delete/any:
   *   delete:
   *     summary: Deleta qualquer usuário
   *     tags: [User]
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
   *               - id
   *             properties:
   *               id:
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
   *         description: Erro interno do servidor
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
