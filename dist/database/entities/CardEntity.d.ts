import { cardRarity } from "../../common/enums/card.rarity.enum";
import { CardImageUris } from "./dto/cardImageUris.dto";
import { CardPrices } from "./dto/cardPrices.dto";
export declare class CardEntity {
    cardId: string;
    cardName: string;
    cardManaCost?: string;
    cardCMC: number;
    cardTypeLine: string;
    cardOracleText?: string;
    cardColors?: string[];
    cardColorIdentity?: string[];
    cardSet: string;
    cardSetName: string;
    cardCollectorNumber: string;
    cardRarity: cardRarity;
    cardImageUris?: CardImageUris;
    cardPrices?: CardPrices;
    cardScryfallUri?: string;
}
//# sourceMappingURL=CardEntity.d.ts.map