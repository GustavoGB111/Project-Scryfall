export declare function encrypt(text: string): {
    iv: string;
    encrypted: string;
    authTag: string;
};
export declare function decrypt(data: {
    iv: string;
    encrypted: string;
    authTag: string;
}): string;
//# sourceMappingURL=encryption.d.ts.map