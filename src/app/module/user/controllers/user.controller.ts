import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";
import {
  UserCreateInputDto,
  UserCreateOutputDto,
} from "../dto/user-create.dto";

@injectable() // serve para que permita q a classe seja injetável (decorator)
export default class UserController {
  constructor(
    @inject("UserService") // indica q está sendo utilizado um injetavel aqui
    private readonly userService: UserService,
  ) {}

  async getUsers(req: Request, res: Response): Promise<Response> {
    const users = await this.userService.getAll();
    return res.status(200).json(users);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const input: UserCreateInputDto = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    };

    const { status, email } = await this.userService.createUser(input);

    return res.status(status).json(email);
  }
}
