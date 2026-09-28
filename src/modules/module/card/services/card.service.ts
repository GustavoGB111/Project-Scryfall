import { inject, injectable } from "tsyringe";
import { ICardRepository } from "../repositories/interface/card.repository.interface";
import IScryfallRepository from "../../scryfall/repository/interface/scryfall.repository.interface";
import { GetCardInputDto } from "../dto/repository.dto/get-card.dto";
import { CardEntity } from "../../../../database/entities/CardEntity";
import { validateErros } from "../../../../common/validate.erros";
import { cardRarity } from "../../../../common/enums/card.rarity.enum";
import { GetCardListInputDto } from "../dto/controller&service.dto/get-card-list.dto";

@injectable()
export class CardService {
  constructor(
    @inject("CardRepository")
    private readonly CardRepository: ICardRepository,
    @inject("ScryfallRepository")
    private readonly ScryfallRepository: IScryfallRepository,
  ) {}

  async getCard(input: GetCardInputDto): Promise<CardEntity> {
    try {
      validateErros(GetCardInputDto, input);

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
      } else if (input.name) {
        cardByScryfall = await this.ScryfallRepository.getCardByName(
          input.name,
          true, // exact
        );

        if (!cardByScryfall) {
          cardByScryfall = await this.ScryfallRepository.getCardByName(
            input.name,
            false, // fuzzy
          );
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
        rarity: cardByScryfall.rarity as cardRarity,

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
    } catch (error) {
      throw error;
    }
  }

  async getCardList(input: GetCardListInputDto): Promise<CardEntity[]> {
    try {
      validateErros(GetCardListInputDto, input);
    } catch (error) {
      throw error;
    }
  }

  async getManyCards() {}

  async getRandomCard() {}
}
