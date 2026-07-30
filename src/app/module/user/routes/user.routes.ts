import { Router } from "express";
import { container } from "tsyringe";
import UserController from "../controllers/user.controller";
import auth from "../../../middlewares/auth";

const userRoutes = Router();

const userController = container.resolve<UserController>("UserController");

// o bind serve pra função sempre conseguir utilizar o this independentemente de como ela é chamada
userRoutes.get("get/me", auth, userController.getUserMe.bind(userController));

userRoutes.get(
  "get/all",
  auth,
  userController.getAllUsers.bind(userController),
);

userRoutes.put("get/any", auth, userController.getOneUser.bind(userController));

userRoutes.put(
  "update/me",
  auth,
  userController.updateUserMe.bind(userController),
);

userRoutes.put(
  "update/any",
  auth,
  userController.updateOneUser.bind(userController),
);

userRoutes.put(
  "update/role/any",
  auth,
  userController.updateOneUserRole.bind(userController),
);

userRoutes.delete(
  "delete/me",
  auth,
  userController.deleteUserMe.bind(userController),
);

userRoutes.delete(
  "delete/any",
  auth,
  userController.deleteOneUser.bind(userController),
);

export default userRoutes;
