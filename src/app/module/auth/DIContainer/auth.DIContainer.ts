import { container } from "tsyringe"; // onde guardarão as intancias
import { AuthRepository } from "../repositories/auth.repository";
import { BrevoClient } from "@getbrevo/brevo";
import { AuthService } from "../services/auth.service";
import AuthController from "../controllers/auth.controller";
const BREVO_API_KEY = process.env.BREVO_API_KEY as string;

container.registerInstance(
  "apiBrevo",
  new BrevoClient({ apiKey: BREVO_API_KEY }),
);

container.registerInstance("AuthRepository", new AuthRepository());

container.registerInstance(
  "AuthService",
  new AuthService(
    container.resolve("AuthRepository"),
    container.resolve("apiBrevo"),
  ),
);

container.registerInstance(
  "AuthController",
  new AuthController(container.resolve("AuthService")),
);
