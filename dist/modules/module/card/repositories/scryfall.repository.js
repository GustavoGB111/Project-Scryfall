"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScryfallClient = void 0;
// infra/http/scryfall.client.ts
const tsyringe_1 = require("tsyringe");
let ScryfallClient = class ScryfallClient {
    baseUrl = "https://api.scryfall.com";
    userAgent = "PROJECT-SCRYFALL/1.0";
    // utiliza o modo path + params, pra ser mais flexível
    async request(path, params) {
        const url = new URL(`${this.baseUrl}${path}`);
        if (params) {
            // entries transforma em um array de pares e depois o searchParams.append transforma em url
            Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
        }
        const response = await fetch(url.toString(), {
            headers: {
                "User-Agent": this.userAgent,
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            const error = await response.json().catch(() => null); // captura erro e se for vazio retorna null
            throw new Error(`Scryfall API error (${response.status}): ${error?.details ?? response.statusText}`);
        }
        return response.json();
    }
    async searchCards(query, page = 1) {
        return this.request("/cards/search", {
            q: query,
            page: String(page),
        });
    }
    async getCardByName(name, exact = false) {
        const param = exact ? "exact" : "fuzzy";
        return this.request("/cards/named", { [param]: name });
    }
    async getCardById(id) {
        return this.request(`/cards/${id}`);
    }
    async getRandomCard() {
        return this.request("/cards/random");
    }
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
            throw new Error(`Scryfall API error (${response.status})`);
        return response.json();
    }
};
exports.ScryfallClient = ScryfallClient;
exports.ScryfallClient = ScryfallClient = __decorate([
    (0, tsyringe_1.injectable)()
], ScryfallClient);
//# sourceMappingURL=scryfall.repository.js.map