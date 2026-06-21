import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";
import {
  UserCreateInputDto,
  UserCreateOutputDto,
} from "../dto/user-create.dto";
import { UserUpdateNameInputDto } from "../dto/user-update.dto";
import { UserGetOneInputDto } from "../dto/user-get.dto";
import { UserLoginInputDto } from "../dto/user-login.dto";

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
      const input: UserGetOneInputDto = { email: req.body.email };

      const user = await this.userService.getOne(input);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro interno",
      });
    }
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserCreateInputDto = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      };

      const { email } = await this.userService.createUser(input);

      return res.status(201).json(email);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }

  async loginUser(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserLoginInputDto = {
        email: req.body.email,
        password: req.body.password,
      };

      const user = await this.userService.loginUser(input);

      return res.status(200).json({
        token: user.token,
        user: {
          email: user.user.email,
          name: user.user.name,
          id: user.user.id,
        },
      });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      }); // pega a instancia do erro e manda como mensagem no json se existir
    }
  }

  async updateUserName(req: Request, res: Response): Promise<Response> {
    try {
      const input: UserUpdateNameInputDto = {
        id: req.userId,
        name: req.body.name,
      };
      const user = this.userService.updateUserName(input);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "erro Interno",
      });
    }
  }
}
