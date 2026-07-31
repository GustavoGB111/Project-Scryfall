import { UserService } from "../services/user.service";
import { Request, Response } from "express";
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
    /**
     * @swagger
     * /user/get/me:
     *   get:
     *     summary: Retorna os dados do user que requisitou a rota
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    getUserMe(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /user/get/all:
     *   get:
     *     summary: Retorna todos os usuários do sistema
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    getAllUsers(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /user/get/any:
     *   put:
     *     summary: Retorna os dados do user que requisitou a rota
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    getOneUser(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /user/update/me:
     *   put:
     *     summary: Atualiza as informações do usuário
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    updateUserMe(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /user/update/any:
     *   put:
     *     summary: Atualiza as informações de um usuário
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    updateOneUser(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /user/update/role/any:
     *   put:
     *     summary: Atualiza a Role de qualquer usuário
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    updateOneUserRole(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /user/delete/me:
     *   delete:
     *     summary: Deleta o registro do user que requisitou a rota
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    deleteUserMe(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /user/delete/any:
     *   delete:
     *     summary: Deleta qualquer usuário
     *     tags: [User]
     *     security:
     *       - bearerAuth: []
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
    deleteOneUser(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=user.controller.d.ts.map