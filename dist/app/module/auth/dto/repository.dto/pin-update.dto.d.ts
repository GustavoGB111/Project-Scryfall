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
    pinsRequested?: number;
    pinsRequestedResetAt?: Date;
    pinsExpiredAt?: Date;
    userPin?: string;
    userPinIv?: string;
    userPinAuthTag?: string;
    pinUsed?: boolean;
    passwordReseted?: boolean;
}
export declare class pinUpdateOutputDto {
    affected: number | null | undefined;
}
//# sourceMappingURL=pin-update.dto.d.ts.map