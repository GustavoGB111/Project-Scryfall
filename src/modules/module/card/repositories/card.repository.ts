import { In, Repository } from "typeorm";
import { AppDataSource } from "../../../../database/databaseConexion";
import { CardEntity } from "../../../../database/entities/CardEntity";
import { ICardRepository } from "./interface/card.repository.interface";
import { GetCardInputDto } from "../dto/repository.dto/get-card.dto";
import { GetManyCardsInputDto } from "../dto/repository.dto/get-many-card.dto";
import { CreateCardInputDto } from "../dto/repository.dto/create-card.dto";

export class CardRepository extends ICardRepository {
  private cardRepository: Repository<CardEntity>; // declaração

  constructor() {
    super();
    this.cardRepository = AppDataSource.getRepository(CardEntity); //instancia
  }

  async getCard(input: GetCardInputDto): Promise<CardEntity | null> {
    const where = input.id
      ? { id: input.id }
      : input.name
        ? { name: input.name }
        : null;

    if (!where) return null;

    return this.cardRepository.findOne({ where });
  }

  async getManyCards(input: GetManyCardsInputDto[]): Promise<CardEntity[]> {
    const ids = input.map((item) => item.id);

    return this.cardRepository.find({
      where: { id: In(ids) },
    });
  }

  async createCard(input: CreateCardInputDto): Promise<void> {
    const cardExisting = await this.getCard({ id: input.id });
    if (cardExisting) {
      throw new Error("card already existing");
    }

    const newCard = await this.cardRepository.create(input);

    await this.cardRepository.save(newCard);
  }
}
