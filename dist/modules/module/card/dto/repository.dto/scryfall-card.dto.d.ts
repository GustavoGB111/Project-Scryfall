export interface ScryfallCard {
    id: string;
    name: string;
    mana_cost?: string;
    cmc: number;
    type_line: string;
    oracle_text?: string;
    colors?: string[];
    color_identity: string[];
    set: string;
    set_name: string;
    collector_number: string;
    rarity: string;
    image_uris?: {
        small: string;
        normal: string;
        large: string;
        png: string;
        art_crop: string;
        border_crop: string;
    };
    prices: {
        usd: string | null;
        usd_foil: string | null;
        eur: string | null;
    };
    scryfall_uri: string;
}
//# sourceMappingURL=scryfall-card.dto.d.ts.map