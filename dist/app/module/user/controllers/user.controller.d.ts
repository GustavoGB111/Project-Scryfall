import { UserService } from "../services/user.service";
import { Request, Response } from "express";
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    getUserMe(req: Request, res: Response): Promise<Response>;
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
    deleteUserMe(req: Request, res: Response): Promise<Response>;
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
    updateUserNameMe(req: Request, res: Response): Promise<Response>;
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
    getOneUser(req: Request, res: Response): Promise<Response>;
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
    deleteOneUser(req: Request, res: Response): Promise<Response>;
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
    updateOneUserRole(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=user.controller.d.ts.map