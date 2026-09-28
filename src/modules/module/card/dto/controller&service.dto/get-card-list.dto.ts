export class GetCardListInputDto {
  color?: string; // ex: "red", "rg", "w,u"
  type?: string; // ex: "creature", "legendary creature"
  oracle_text?: string; // ex: "draw a card"
  power?: string; // ex: ">=4"
  toughness?: string; // ex: "<=2"
  cmc?: string; // ex: "=3"
  mana_cost?: string; // ex: "{2}{U}{U}"
  rarity?: string; // ex: "mythic"
  set?: string; // ex: "znr"
  format?: string; // ex: "modern"
  is?: string; // ex: "commander"

  // controle de resultado
  unique?: "cards" | "art" | "prints";
  order?:
    | "name"
    | "set"
    | "released"
    | "rarity"
    | "color"
    | "usd"
    | "tix"
    | "eur"
    | "cmc"
    | "power"
    | "toughness"
    | "edhrec"
    | "penny"
    | "artist"
    | "review";
  dir?: "auto" | "asc" | "desc";
  page?: number;
  includeExtras?: boolean;
  includeMultilingual?: boolean;
  includeVariations?: boolean;
}
