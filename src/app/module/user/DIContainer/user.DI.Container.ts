import { container } from "tsyringe"; // importação do container de tsyringe
import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import UserController from "../controllers/user.controller";

/**
 * Inject -> indica o q vai ser injetado em cada parametro do construtor
 * Injetable -> indica que uma classe pode ser injetavel, a classe só pode ser injetada se tiver esse decorator
 **/

// Registro de Instância por meio de injeção
// Registrando instancia do UserRepository
container.registerInstance(
  "UserRepository", // Key que representa a instancia de UserRepository
  new UserRepository(), // instância(value)
);

// Registrando instancia do UserService
container.registerInstance(
  "UserService", // Key que representa a instancia de UserService
  new UserService(container.resolve("UserRepository")), // puxando a instancia do UserRepository pra aplicar em UserService
);

// Registrando instancia do UserController
container.registerInstance(
  "UserController",
  new UserController(container.resolve("UserService")),
);
