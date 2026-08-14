import { ScryfallCard } from "../dto/scryfall-card.dto";
import { ScryfallList } from "../dto/scryfall-list.dto";
import IScryfallRepository from "./interface/scryfall.repository.interface";
export declare class ScryfallRepository extends IScryfallRepository {
    private readonly baseUrl;
    private readonly userAgent;
    private request;
    searchCards(query: string, page?: number): Promise<ScryfallList>;
    getCardByName(name: string, exact?: boolean): Promise<ScryfallCard>;
    getCardById(id: string): Promise<ScryfallCard>;
    getRandomCard(): Promise<ScryfallCard>;
    getCardsCollection(identifiers: {
        id?: string;
        name?: string;
    }[]): Promise<ScryfallCard[]>;
}
//# sourceMappingURL=scryfall.repository.d.ts.map