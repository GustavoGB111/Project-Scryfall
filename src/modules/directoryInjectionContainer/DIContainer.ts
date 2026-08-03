import { container } from "tsyringe"; // importação do container de tsyringe
import { UserRepository } from "../module/user/repositories/user.repository";
import { UserService } from "../module/user/services/user.service";
import UserController from "../module/user/controllers/user.controller";
import { AuthRepository } from "../module/auth/repositories/auth.repository";
import { BrevoClient } from "@getbrevo/brevo";
import { AuthService } from "../module/auth/services/auth.service";
import AuthController from "../module/auth/controllers/auth.controller";
import { Middlewares } from "../middlewares/middleware";
import { Encrypt } from "../../common/encryption";

// Instancia para criptografia
container.registerInstance("Encrypt", new Encrypt());

// Instancia para middleware
container.registerInstance("Middleware", new Middlewares());

// Instancias para User
container.registerInstance("UserRepository", new UserRepository());
container.registerInstance(
  "UserService",
  new UserService(
    container.resolve("UserRepository"),
    container.resolve("Encrypt"),
  ),
);
container.registerInstance(
  "UserController",
  new UserController(container.resolve("UserService")),
);

// Instancias para Auth
const BREVO_API_KEY = process.env.BREVO_API_KEY as string;
container.registerInstance(
  "ApiBrevo",
  new BrevoClient({ apiKey: BREVO_API_KEY }),
);
container.registerInstance("AuthRepository", new AuthRepository());
container.registerInstance(
  "AuthService",
  new AuthService(
    container.resolve("AuthRepository"),
    container.resolve("ApiBrevo"),
    container.resolve("Encrypt"),
  ),
);
container.registerInstance(
  "AuthController",
  new AuthController(container.resolve("AuthService")),
);
