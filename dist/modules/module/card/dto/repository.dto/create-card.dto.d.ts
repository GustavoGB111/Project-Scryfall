import { cardRarity } from "../../../../../common/enums/card.rarity.enum";
declare class ImageUris {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}
export declare class Prices {
    usd?: string | null;
    usd_foil?: string | null;
    usd_etched?: string | null;
    eur?: string | null;
    eur_foil?: string | null;
    tix?: string | null;
}
export declare class CreateCardInputDto {
    id: string;
    name: string;
    mana_cost?: string;
    cmc: number;
    type_line: string;
    oracle_text?: string;
    colors?: string[];
    color_identity: string[];
    set_code: string;
    set_name: string;
    collector_number: string;
    rarity: cardRarity;
    image_uris?: ImageUris;
    prices: Prices;
    scryfall_uri: string;
}
export {};
//# sourceMappingURL=create-card.dto.d.ts.map