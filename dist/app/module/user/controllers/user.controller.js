"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const user_service_1 = require("../services/user.service");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
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
    async getUserMe(req, res) {
        try {
            const input = {
                userId: req.userId,
            };
            const user = await this.userService.getUserMe({ userId: input.userId });
            return res.status(200).json({ message: "Usuário encontrado", user });
        }
        catch (error) {
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
    async deleteUserMe(req, res) {
        try {
            const input = {
                userId: req.userId,
            };
            await this.userService.deleteUserMe({
                userId: input.userId,
            });
            return res.status(200).json({ message: "Usuário deletado" });
        }
        catch (error) {
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
    async updateUserNameMe(req, res) {
        try {
            const input = {
                userId: req.userId,
                newName: req.body.name,
            };
            await this.userService.updateUserNameMe({
                userId: input.userId,
                newName: input.newName,
            });
            return res.status(200).json({ message: "Usuário atualizado" });
        }
        catch (error) {
            return res.status(400).json({
                message: error instanceof Error ? error.message : "Erro Interno",
            });
        }
    }
};
UserController = __decorate([
    (0, tsyringe_1.injectable)() // serve para que permita q a classe seja injetável (decorator)
    ,
    __param(0, (0, tsyringe_1.inject)("UserService")),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map