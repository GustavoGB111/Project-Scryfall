// infra/http/scryfall.client.ts
import { injectable } from "tsyringe";
import { ScryfallCard } from "../dto/scryfall-card.dto";
import { ScryfallList } from "../dto/scryfall-list.dto";
import IScryfallRepository from "./interface/scryfall.repository.interface";

@injectable()
export class ScryfallRepository extends IScryfallRepository {
  private readonly baseUrl = "https://api.scryfall.com";
  private readonly userAgent = "PROJECT-SCRYFALL/1.0";

  // utiliza o modo path + params, pra ser mais flexível
  private async request<T>(
    path: string,
    params?: Record<string, string>,
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`); // criação da url
    if (params) {
      // entries transforma em um array de pares e depois o searchParams.append transforma a url
      // forEach pois não há necessidade de retorno
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value),
      );
    }

    // envio da requisição
    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent": this.userAgent,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null); // captura a resposta do erro e caso seja um problema de promise ele retorna null
      throw new Error(
        `Scryfall API error (${response.status}): ${error?.details ?? response.statusText}`,
      );
    }

    return response.json() as Promise<T>;
  }

  // Procura cards da pagina 1 com base nos filtros da query
  async searchCards(query: string, page = 1): Promise<ScryfallList> {
    return this.request<ScryfallList>("/cards/search", {
      q: query,
      page: String(page),
    });
  }

  // Procura o card com base no nome, pondendo retornar de 1 carta a até uma lista
  async getCardByName(name: string, exact = false): Promise<ScryfallCard> {
    const param = exact ? "exact" : "fuzzy";
    return this.request<ScryfallCard>("/cards/named", { [param]: name });
  }

  // Procura o card com base no id
  async getCardById(id: string): Promise<ScryfallCard> {
    return this.request<ScryfallCard>(`/cards/${id}`);
  }

  // Procura um card aleatório
  async getRandomCard(): Promise<ScryfallCard> {
    return this.request<ScryfallCard>("/cards/random");
  }

  // Procura diversos cards com base no id
  async getCardsCollection(
    identifiers: { id?: string; name?: string }[],
  ): Promise<ScryfallCard[]> {
    const response = await fetch(`${this.baseUrl}/cards/collection`, {
      method: "POST",
      headers: {
        "User-Agent": this.userAgent,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifiers }),
    });

    if (!response.ok)
      // para caso não seja encontrado
      throw new Error(`Scryfall API error (${response.status})`);
    return response.json();
  }
}
