export declare class pinUpdateInputDto {
    userId: string;
    pinsRequested?: number | undefined;
    pinsRequestedResetAt?: Date | undefined;
    pinsExpiredAt?: Date | undefined;
    userPin?: string | undefined;
    userPinIv?: string | undefined;
    userPinAuthTag?: string | undefined;
    pinUsed?: boolean | undefined;
    passwordReseted?: boolean | undefined;
}
export declare class pinUpdateOutputDto {
    affected: number | null | undefined;
}
//# sourceMappingURL=pin-update.dto.d.ts.map