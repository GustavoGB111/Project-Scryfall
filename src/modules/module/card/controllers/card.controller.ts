import { inject, injectable } from "tsyringe";
import { CardService } from "../services/card.service";

@injectable()
export class CardController {
  constructor(
    @inject("CardService")
    private readonly CardService: CardService,
  ) {}
}
