import { ICardRepository } from "../repositories/interface/card.repository.interface";
import IScryfallRepository from "../../scryfall/repository/interface/scryfall.repository.interface";
import { GetCardInputDto } from "../dto/repository.dto/get-card.dto";
import { CardEntity } from "../../../../database/entities/CardEntity";
import { GetCardListInputDto } from "../dto/controller&service.dto/get-card-list.dto";
export declare class CardService {
    private readonly CardRepository;
    private readonly ScryfallRepository;
    constructor(CardRepository: ICardRepository, ScryfallRepository: IScryfallRepository);
    getCard(input: GetCardInputDto): Promise<CardEntity>;
    getCardList(input: GetCardListInputDto): Promise<CardEntity[]>;
    getManyCards(): Promise<void>;
    getRandomCard(): Promise<void>;
}
//# sourceMappingURL=card.service.d.ts.map