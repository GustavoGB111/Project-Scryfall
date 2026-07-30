export declare class pinResetInputDto {
    userId: string;
    pinsRequested: number;
    pinsRequestedResetAt: Date;
    pinsExpiredAt: Date;
}
export declare class pinResetOutputDto {
    affected: number | null | undefined;
}
export declare class pinUsedUpdateInputDto {
    userId: string;
    pinUsed: boolean;
}
export declare class pinUsedUpdateOutputDto {
    affected: number | null | undefined;
}
export declare class passwordResetedUpdateInputDto {
    userId: string;
    passwordReseted: boolean;
}
export declare class passwordUsedUpdateOutputDto {
    affected: number | null | undefined;
}
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