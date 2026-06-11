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
    async getUsers(req, res) {
        const users = await this.userService.getAll();
        return res.status(200).json(users);
    }
    async createUser(req, res) {
        const input = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
        };
        const { status, email } = await this.userService.createUser(input);
        return res.status(status).json(email);
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