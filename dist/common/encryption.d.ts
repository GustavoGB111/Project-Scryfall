export declare class Encrypt {
    encrypt(text: string): Promise<{
        iv: string;
        encrypted: string;
        authTag: string;
    }>;
    decrypt(data: {
        iv: string;
        encrypted: string;
        authTag: string;
    }): Promise<string>;
}
//# sourceMappingURL=encryption.d.ts.map