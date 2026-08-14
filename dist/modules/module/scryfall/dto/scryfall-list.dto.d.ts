import { ScryfallCard } from "./scryfall-card.dto";
export interface ScryfallList {
    object: "list";
    total_cards: number;
    has_more: boolean;
    next_page?: string;
    data: ScryfallCard[];
}
//# sourceMappingURL=scryfall-list.dto.d.ts.map