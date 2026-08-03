import { Router } from "express";
import { container } from "tsyringe";
import UserController from "../controllers/user.controller";
import { Middlewares } from "../../../middlewares/middleware";

const userRoutes = Router();

const userController = container.resolve<UserController>("UserController");
const middleware = container.resolve<Middlewares>("Middleware");

// o bind serve pra função sempre conseguir utilizar o this independentemente de como ela é chamada
userRoutes.get(
  "/get/me",
  middleware.auth,
  userController.getUserMe.bind(userController),
);

userRoutes.get(
  "/get/all",
  middleware.auth,
  userController.getAllUsers.bind(userController),
);

userRoutes.put(
  "/get/any",
  middleware.auth,
  userController.getOneUser.bind(userController),
);

userRoutes.put(
  "/update/me",
  middleware.auth,
  userController.updateUserMe.bind(userController),
);

userRoutes.put(
  "/update/any",
  middleware.auth,
  userController.updateOneUser.bind(userController),
);

userRoutes.put(
  "/update/role/any",
  middleware.auth,
  userController.updateOneUserRole.bind(userController),
);

userRoutes.delete(
  "/delete/me",
  middleware.auth,
  userController.deleteUserMe.bind(userController),
);

userRoutes.delete(
  "/delete/any",
  middleware.auth,
  userController.deleteOneUser.bind(userController),
);

export default userRoutes;
