"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCardListInputDto = void 0;
class GetCardListInputDto {
    color; // ex: "red", "rg", "w,u"
    type; // ex: "creature", "legendary creature"
    oracle_text; // ex: "draw a card"
    power; // ex: ">=4"
    toughness; // ex: "<=2"
    cmc; // ex: "=3"
    mana_cost; // ex: "{2}{U}{U}"
    rarity; // ex: "mythic"
    set; // ex: "znr"
    format; // ex: "modern"
    is; // ex: "commander"
    // controle de resultado
    unique;
    order;
    dir;
    page;
    includeExtras;
    includeMultilingual;
    includeVariations;
}
exports.GetCardListInputDto = GetCardListInputDto;
//# sourceMappingURL=get-card-list.dto.js.map