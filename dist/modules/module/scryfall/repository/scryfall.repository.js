"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScryfallRepository = void 0;
// infra/http/scryfall.client.ts
const tsyringe_1 = require("tsyringe");
const scryfall_repository_interface_1 = __importDefault(require("./interface/scryfall.repository.interface"));
let ScryfallRepository = class ScryfallRepository extends scryfall_repository_interface_1.default {
    baseUrl = "https://api.scryfall.com";
    userAgent = "PROJECT-SCRYFALL/1.0";
    // utiliza o modo path + params, pra ser mais flexível
    async request(path, params) {
        const url = new URL(`${this.baseUrl}${path}`); // criação da url
        if (params) {
            // entries transforma em um array de pares e depois o searchParams.append transforma a url
            // forEach pois não há necessidade de retorno
            Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
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
            throw new Error(`Scryfall API error (${response.status}): ${error?.details ?? response.statusText}`);
        }
        return response.json();
    }
    // Procura cards da pagina 1 com base nos filtros da query
    async searchCards(query, page = 1) {
        return this.request("/cards/search", {
            q: query,
            page: String(page),
        });
    }
    // Procura o card com base no nome, pondendo retornar de 1 carta a até uma lista
    async getCardByName(name, exact = false) {
        const param = exact ? "exact" : "fuzzy";
        return this.request("/cards/named", { [param]: name });
    }
    // Procura o card com base no id
    async getCardById(id) {
        return this.request(`/cards/${id}`);
    }
    // Procura um card aleatório
    async getRandomCard() {
        return this.request("/cards/random");
    }
    // Procura diversos cards com base no id
    async getCardsCollection(identifiers) {
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
};
exports.ScryfallRepository = ScryfallRepository;
exports.ScryfallRepository = ScryfallRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ScryfallRepository);
//# sourceMappingURL=scryfall.repository.js.map