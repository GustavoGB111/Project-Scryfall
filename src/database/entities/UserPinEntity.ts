import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity("user_pin")
export class UserPinEntity {
  @PrimaryGeneratedColumn("uuid")
  pinId!: string;

  @Column("varchar", { length: 255, nullable: false })
  userPin!: string;

  @Column("varchar", { length: 255, nullable: false })
  userPinIv!: string;

  @Column("varchar", { length: 255, nullable: false })
  userPinAuthTag!: string;

  @Column("integer", { default: 0 })
  pinsRequested!: number;

  @Column("timestamp", { nullable: true })
  pinsRequestedResetAt!: Date;

  @Column("timestamp", { nullable: false })
  pinsExpiredAt!: Date;

  @Column("boolean", { nullable: false, default: false })
  pinUsed!: boolean;

  @Column("boolean", { nullable: false, default: false })
  passwordReseted!: boolean;

  @ManyToOne(() => UserEntity, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  userIdPin!: UserEntity;
}
