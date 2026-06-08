"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe"); // importação do container de tsyringe
const databaseConexion_1 = require("../../DB/databaseConexion");
const UserEntity_1 = require("../entities/UserEntity");
const UserRepository_1 = require("../repositories/UserRepository");
/**
 * Inject -> indica o q vai ser injetado em cada parametro do construtor
 * Injetable -> indica que uma classe pode ser injetavel, a classe só pode ser injetada se tiver esse decorator
 **/
tsyringe_1.container.registerInstance("UserRepository", new UserRepository_1.UserRepository(databaseConexion_1.AppDataSource.getRepository(UserEntity_1.UserEntity))); // Injeta no UserRepository uma instância da UserEntity
//# sourceMappingURL=DIContainer.js.map