import { Router } from "express";
import { container } from "tsyringe";
import UserController from "../controllers/user.controller";
import auth from "../../../middlewares/auth";

const userRoutes = Router();

const userController = container.resolve<UserController>("UserController");

// o bind serve pra função sempre conseguir utilizar o this independentemente de como ela é chamada
userRoutes.put("get/me", auth, userController.getUserMe.bind(userController));

userRoutes.delete(
  "delete/me",
  auth,
  userController.deleteUserMe.bind(userController),
);

userRoutes.put(
  "updateName/me",
  auth,
  userController.updateUserNameMe.bind(userController),
);

userRoutes.put("get/any", auth, userController.getOneUser.bind(userController));

userRoutes.delete(
  "delete/any",
  auth,
  userController.deleteOneUser.bind(userController),
);

userRoutes.put(
  "updateRole/any",
  auth,
  userController.updateOneUserRole.bind(userController),
);

export default userRoutes;
