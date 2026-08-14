import { ScryfallCard } from "../../dto/scryfall-card.dto";
import { ScryfallList } from "../../dto/scryfall-list.dto";
export default abstract class IScryfallRepository {
    abstract searchCards(query: string, page: number): Promise<ScryfallList>;
    abstract getCardByName(name: string, exact: boolean): Promise<ScryfallCard>;
    abstract getCardById(id: string): Promise<ScryfallCard>;
    abstract getRandomCard(): Promise<ScryfallCard>;
    abstract getCardsCollection(identifiers: {
        id?: string;
        name?: string;
    }[]): Promise<ScryfallCard[]>;
}
//# sourceMappingURL=scryfall.repository.interface.d.ts.map