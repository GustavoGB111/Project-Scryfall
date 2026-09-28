export declare class GetCardListInputDto {
    color?: string;
    type?: string;
    oracle_text?: string;
    power?: string;
    toughness?: string;
    cmc?: string;
    mana_cost?: string;
    rarity?: string;
    set?: string;
    format?: string;
    is?: string;
    unique?: "cards" | "art" | "prints";
    order?: "name" | "set" | "released" | "rarity" | "color" | "usd" | "tix" | "eur" | "cmc" | "power" | "toughness" | "edhrec" | "penny" | "artist" | "review";
    dir?: "auto" | "asc" | "desc";
    page?: number;
    includeExtras?: boolean;
    includeMultilingual?: boolean;
    includeVariations?: boolean;
}
//# sourceMappingURL=get-card-list.dto.d.ts.map