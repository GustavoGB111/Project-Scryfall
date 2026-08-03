"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const ALGORITHM = "aes-256-gcm";
const KEY = Buffer.from(process.env.ENCRYPTION_KEY, "hex"); // converte hex -> Buffer de 32 bytes
class Encrypt {
    async encrypt(text) {
        const iv = crypto_1.default.randomBytes(12);
        const cipher = crypto_1.default.createCipheriv(ALGORITHM, KEY, iv);
        const encrypted = Buffer.concat([
            cipher.update(text, "utf8"),
            cipher.final(),
        ]);
        const authTag = cipher.getAuthTag();
        return {
            iv: iv.toString("hex"),
            encrypted: encrypted.toString("hex"),
            authTag: authTag.toString("hex"),
        };
    }
    async decrypt(data) {
        const decipher = crypto_1.default.createDecipheriv(ALGORITHM, KEY, Buffer.from(data.iv, "hex"));
        decipher.setAuthTag(Buffer.from(data.authTag, "hex"));
        const decrypted = Buffer.concat([
            decipher.update(Buffer.from(data.encrypted, "hex")),
            decipher.final(),
        ]);
        return decrypted.toString("utf8");
    }
}
exports.Encrypt = Encrypt;
//# sourceMappingURL=encryption.js.map