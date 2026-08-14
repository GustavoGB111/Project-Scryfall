import { ScryfallCard } from "../dto/repository.dto/scryfall-card.dto";
import { ScryfallList } from "../dto/repository.dto/scryfall-list.dto";
export declare class ScryfallClient {
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
    }[]): Promise<any>;
}
//# sourceMappingURL=scryfall.repository.d.ts.map