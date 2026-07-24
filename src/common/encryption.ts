import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
const KEY = Buffer.from(process.env.ENCRYPTION_KEY!, "hex"); // converte hex -> Buffer de 32 bytes

export function encrypt(text: string) {
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

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

export function decrypt(data: {
  iv: string;
  encrypted: string;
  authTag: string;
}) {
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    KEY,
    Buffer.from(data.iv, "hex"),
  );

  decipher.setAuthTag(Buffer.from(data.authTag, "hex"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(data.encrypted, "hex")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}
