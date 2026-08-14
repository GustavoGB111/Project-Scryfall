import { UserEntity } from "./UserEntity";
export declare class UserPinEntity {
    pinId: string;
    userPin: string;
    userPinIv: string;
    userPinAuthTag: string;
    pinsExpiredAt: Date;
    pinsRequested: number;
    pinsRequestedResetAt: Date;
    pinUsed: boolean;
    passwordReseted: boolean;
    userIdPin: UserEntity;
}
//# sourceMappingURL=UserPinEntity.d.ts.map