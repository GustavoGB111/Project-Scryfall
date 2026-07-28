import { UserService } from "../services/user.service";
import { Request, Response } from "express";
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    getUserMe(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=user.controller.d.ts.map