import { GetCardInputDto } from "../../dto/repository.dto/get-card.dto";
import { CardEntity } from "../../../../../database/entities/CardEntity";
import { GetManyCardsInputDto } from "../../dto/repository.dto/get-many-card.dto";
import { CreateCardInputDto } from "../../dto/repository.dto/create-card.dto";

export abstract class ICardRepository {
  abstract getCard(input: GetCardInputDto): Promise<CardEntity | null>;
  abstract getManyCards(input: GetManyCardsInputDto[]): Promise<CardEntity[]>;
  abstract createCard(input: CreateCardInputDto): Promise<void>;
}
