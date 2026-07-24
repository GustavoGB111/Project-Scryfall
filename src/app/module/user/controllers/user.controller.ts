import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";
import { UserGetOneInputDto } from "../dto/controler&service.dto/user-get.dto";
import { UserDeleteInputDto } from "../dto/controler&service.dto/user-delete.dto";
import { UserUpdateNameInputDto } from "../dto/controler&service.dto/user-update.name.dto";

@injectable() // serve para que permita q a classe seja injetável (decorator)
export default class UserController {
  constructor(
    @inject("UserService") // indica q está sendo utilizado um injetavel aqui
    private readonly userService: UserService,
  ) {}

  async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.getAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro interno",
      });
    }
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserGetOneInputDto = { userEmail: req.body.userEmail };

      const user = await this.userService.getOne(input);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro interno",
      });
    }
  }

  async updateUserName(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserUpdateNameInputDto = {
        userId: req.userId,
        userName: req.body.name,
      };
      const user = this.userService.updateUserName(input);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserDeleteInputDto = {
        userId: req.userId,
      };

      await this.userService.deleteUser(input);

      return res.status(200).json({ message: "User deletado com sucesso" });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }
}
