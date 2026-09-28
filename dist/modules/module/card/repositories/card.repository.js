"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
const typeorm_1 = require("typeorm");
const databaseConexion_1 = require("../../../../database/databaseConexion");
const CardEntity_1 = require("../../../../database/entities/CardEntity");
const card_repository_interface_1 = require("./interface/card.repository.interface");
class CardRepository extends card_repository_interface_1.ICardRepository {
    cardRepository; // declaração
    constructor() {
        super();
        this.cardRepository = databaseConexion_1.AppDataSource.getRepository(CardEntity_1.CardEntity); //instancia
    }
    async getCard(input) {
        const where = input.id
            ? { id: input.id }
            : input.name
                ? { name: input.name }
                : null;
        if (!where)
            return null;
        return this.cardRepository.findOne({ where });
    }
    async getManyCards(input) {
        const ids = input.map((item) => item.id);
        return this.cardRepository.find({
            where: { id: (0, typeorm_1.In)(ids) },
        });
    }
    async createCard(input) {
        const cardExisting = await this.getCard({ id: input.id });
        if (cardExisting) {
            throw new Error("card already existing");
        }
        const newCard = await this.cardRepository.create(input);
        await this.cardRepository.save(newCard);
    }
}
exports.CardRepository = CardRepository;
//# sourceMappingURL=card.repository.js.map