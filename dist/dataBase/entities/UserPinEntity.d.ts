import { UserEntity } from "./UserEntity";
export declare class UserPinEntity {
    pinId: string;
    userPin: string;
    userPinIv: string;
    userPinAuthTag: string;
    pinsRequested: number;
    pinsRequestedResetAt: Date;
    pinsExpiredAt: Date;
    pinUsed: boolean;
    passwordReseted: boolean;
    userIdPin: UserEntity;
}
//# sourceMappingURL=UserPinEntity.d.ts.map