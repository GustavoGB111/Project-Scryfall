import { AuthService } from "../services/auth.service";
import { Request, Response } from "express";
export default class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    createUser(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /auth/login:
     *   put:
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
     *         description: Erro no servidor.
     */
    login(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /auth/requestPin:
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
     *         description: Erro no servidor.
     */
    requestPin(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /auth/sendPin:
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
     *                 type: integer
     *                 example: 123456
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
     *         description: Erro no servidor.
     */
    sendPin(req: Request, res: Response): Promise<Response>;
    /**
     * @swagger
     * /auth/resetPassword:
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
     *               - token
     *               - password
     *               - passwordConfirm
     *             properties:
     *               token:
     *                 type: string
     *                 example: "550e8400-e29b-41d4-a716-446655440000"
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
     *         description: Erro no servidor.
     */
    resetPassword(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=auth.controller.d.ts.map