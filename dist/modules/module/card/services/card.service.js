"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const tsyringe_1 = require("tsyringe");
const card_repository_interface_1 = require("../repositories/interface/card.repository.interface");
const scryfall_repository_interface_1 = __importDefault(require("../../scryfall/repository/interface/scryfall.repository.interface"));
const get_card_dto_1 = require("../dto/repository.dto/get-card.dto");
const validate_erros_1 = require("../../../../common/validate.erros");
const get_card_list_dto_1 = require("../dto/controller&service.dto/get-card-list.dto");
let CardService = class CardService {
    CardRepository;
    ScryfallRepository;
    constructor(CardRepository, ScryfallRepository) {
        this.CardRepository = CardRepository;
        this.ScryfallRepository = ScryfallRepository;
    }
    async getCard(input) {
        try {
            (0, validate_erros_1.validateErros)(get_card_dto_1.GetCardInputDto, input);
            const where = input.id
                ? { id: input.id }
                : input.name
                    ? { name: input.name }
                    : null;
            if (!where) {
                throw new Error("Um dos campos não foi preenchido");
            }
            const cardByAPI = await this.CardRepository.getCard(where);
            if (cardByAPI) {
                return cardByAPI;
            }
            let cardByScryfall;
            if (input.id) {
                cardByScryfall = await this.ScryfallRepository.getCardById(input.id);
            }
            else if (input.name) {
                cardByScryfall = await this.ScryfallRepository.getCardByName(input.name, true);
                if (!cardByScryfall) {
                    cardByScryfall = await this.ScryfallRepository.getCardByName(input.name, false);
                }
            }
            if (!cardByScryfall) {
                throw new Error("Carta não foi encontrada na Scryfall");
            }
            const createInDB = await this.CardRepository.createCard({
                id: cardByScryfall.id,
                name: cardByScryfall.name,
                mana_cost: cardByScryfall.mana_cost ?? "",
                cmc: cardByScryfall.cmc,
                type_line: cardByScryfall.type_line,
                oracle_text: cardByScryfall.oracle_text ?? "",
                colors: cardByScryfall.colors ?? [],
                color_identity: cardByScryfall.color_identity,
                set_code: cardByScryfall.set,
                set_name: cardByScryfall.set_name,
                collector_number: cardByScryfall.collector_number,
                rarity: cardByScryfall.rarity,
                ...(cardByScryfall.image_uris && {
                    image_uris: {
                        small: cardByScryfall.image_uris.small,
                        normal: cardByScryfall.image_uris.normal,
                        large: cardByScryfall.image_uris.large,
                        png: cardByScryfall.image_uris.png,
                        art_crop: cardByScryfall.image_uris.art_crop,
                        border_crop: cardByScryfall.image_uris.border_crop,
                    },
                }),
                ...(cardByScryfall.prices && {
                    prices: {
                        usd: cardByScryfall.prices.usd ?? null,
                        usd_foil: cardByScryfall.prices.usd_foil ?? null,
                        eur: cardByScryfall.prices.eur ?? null,
                    },
                }),
                scryfall_uri: cardByScryfall.scryfall_uri,
            });
            const card = await this.CardRepository.getCard({ id: cardByScryfall.id });
            if (!card) {
                throw new Error("Carta não pôde ser criada ou não foi identificada");
            }
            return card;
        }
        catch (error) {
            throw error;
        }
    }
    async getCardList(input) {
        try {
            (0, validate_erros_1.validateErros)(get_card_list_dto_1.GetCardListInputDto, input);
        }
        catch (error) {
            throw error;
        }
    }
    async getManyCards() { }
    async getRandomCard() { }
};
exports.CardService = CardService;
exports.CardService = CardService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("CardRepository")),
    __param(1, (0, tsyringe_1.inject)("ScryfallRepository")),
    __metadata("design:paramtypes", [card_repository_interface_1.ICardRepository,
        scryfall_repository_interface_1.default])
], CardService);
//# sourceMappingURL=card.service.js.map