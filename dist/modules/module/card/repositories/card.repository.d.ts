import { CardEntity } from "../../../../database/entities/CardEntity";
import { ICardRepository } from "./interface/card.repository.interface";
import { GetCardInputDto } from "../dto/repository.dto/get-card.dto";
import { GetManyCardsInputDto } from "../dto/repository.dto/get-many-card.dto";
import { CreateCardInputDto } from "../dto/repository.dto/create-card.dto";
export declare class CardRepository extends ICardRepository {
    private cardRepository;
    constructor();
    getCard(input: GetCardInputDto): Promise<CardEntity | null>;
    getManyCards(input: GetManyCardsInputDto[]): Promise<CardEntity[]>;
    createCard(input: CreateCardInputDto): Promise<void>;
}
//# sourceMappingURL=card.repository.d.ts.map