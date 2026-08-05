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
    async getUserMe(req, res) {
        try {
            const input = {
                userId: req.userId,
            };
            const user = await this.userService.getUserMe({ userId: input.userId });
            return res.status(200).json({ message: "Usuário encontrado", user });
        }
        catch (error) {
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
    async getAllUsers(req, res) {
        try {
            const input = {
                userId: req.userId,
                userRole: req.userRole,
            };
            const response = await this.userService.getAllUser(input);
            return res.status(200).json({ message: "Usuários: ", response });
        }
        catch (error) {
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
    async getOneUser(req, res) {
        try {
            const input = {
                yourUserId: req.userId,
                userId: req.body.id,
                userRole: req.userRole,
            };
            const response = await this.userService.getOneUser(input);
            return res.status(200).json({ message: "Usuário encontrado", response });
        }
        catch (error) {
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
    async updateUserMe(req, res) {
        try {
            const input = {
                userId: req.userId,
                userOldPassword: req.body.oldPassword,
                userNewPassword: req.body.newPassword,
                userNewPasswordConfirm: req.body.newPasswordConfirm,
                userName: req.body.newName,
                userNewEmail: req.body.newEmail,
            };
            await this.userService.updateUserMe(input);
            return res.status(200).json({ message: "Usuário atualizado" });
        }
        catch (error) {
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
    async updateOneUser(req, res) {
        try {
            const input = {
                userId: req.body.id,
                yourUserId: req.userId,
                userRole: req.userRole,
                userNewPassword: req.body.newPassword,
                userNewPasswordConfirm: req.body.newPasswordConfirm,
                userName: req.body.newName,
                userNewEmail: req.body.newEmail,
            };
            await this.userService.updateOneUser(input);
            return res.status(200).json({ message: "Usuário atualizado" });
        }
        catch (error) {
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
    async updateOneUserRole(req, res) {
        try {
            const input = {
                yourUserId: req.userId,
                userId: req.body.id,
                userRole: req.userRole,
                userUpDown: req.body.userUpDown,
            };
            await this.userService.modifyUserRole(input);
            return res.status(200).json({ message: "Usuário atualizado" });
        }
        catch (error) {
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
    async deleteOneUser(req, res) {
        try {
            const input = {
                yourUserId: req.userId,
                userId: req.body.id,
                userRole: req.userRole,
            };
            await this.userService.deleteOneUser(input);
            return res.status(200).json({ message: "Usuário deletado" });
        }
        catch (error) {
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
};
UserController = __decorate([
    (0, tsyringe_1.injectable)() // serve para que permita q a classe seja injetável (decorator)
    ,
    __param(0, (0, tsyringe_1.inject)("UserService")),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map