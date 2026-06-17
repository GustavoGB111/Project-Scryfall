import { Router } from "express";
import { container } from "tsyringe";
import UserController from "../controllers/user.controller";
import auth from "../../../middlewares/auth";

const userRoutes = Router();

const userController = container.resolve(UserController);

// o bind serve pra função sempre conseguir utilizar o this independentemente de como ela é chamada
userRoutes.get("/getUsers", userController.getUsers.bind(userController)); // você precisa redeclarar a função como param

userRoutes.get("/getUser", userController.getUser.bind(userController));

// login

userRoutes.put(
  "/updateNameUser",
  auth,
  userController.updateUserName.bind(userController),
);

userRoutes.post("/create", userController.createUser.bind(userController)); // após o post é tudo url

// delete route

export default userRoutes;
