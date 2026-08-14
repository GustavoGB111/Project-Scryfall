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
  @PrimaryGeneratedColumn("uuid", { name: "pin_id" })
  pinId!: string;

  @Column("varchar", { name: "user_pin", length: 255, nullable: false })
  userPin!: string;

  @Column("varchar", { name: "user_pin_iv", length: 255, nullable: false })
  userPinIv!: string;

  @Column("varchar", {
    name: "user_pin_auth_tag",
    length: 255,
    nullable: false,
  })
  userPinAuthTag!: string;

  @Column("timestamp", { name: "pins_expired_at", nullable: false })
  pinsExpiredAt!: Date;

  @Column("integer", { name: "pins_requested", default: 0 })
  pinsRequested!: number;

  @Column("timestamp", { name: "pins_requested_reset_at", nullable: true })
  pinsRequestedResetAt!: Date;

  @Column("boolean", { name: "pin_used", nullable: false, default: false })
  pinUsed!: boolean;

  @Column("boolean", {
    name: "password_reseted",
    nullable: false,
    default: false,
  })
  passwordReseted!: boolean;

  @ManyToOne(() => UserEntity, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  userIdPin!: UserEntity;
}
