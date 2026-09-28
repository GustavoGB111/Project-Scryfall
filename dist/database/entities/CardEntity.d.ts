import { cardRarity } from "../../common/enums/card.rarity.enum";
import { CardImageUris } from "./dto/cardImageUris.dto";
import { CardPrices } from "./dto/cardPrices.dto";
export declare class CardEntity {
    id: string;
    name: string;
    mana_cost: string | null;
    cmc: number;
    type_line: string;
    oracle_text: string | null;
    colors: string[] | null;
    color_identity: string[] | null;
    set_code: string;
    set_name: string;
    collector_number: string;
    rarity: cardRarity;
    image_uris: CardImageUris | null;
    prices: CardPrices | null;
    scryfall_uri: string | null;
}
//# sourceMappingURL=CardEntity.d.ts.map