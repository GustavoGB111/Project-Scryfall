import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../../common/enums/user.table.enum";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid", { name: "user_id" }) // chave primaria de auto incremento
  userId!: string;

  @Column("varchar", { name: "user_name", length: 255, nullable: false }) // tamanho 100 e não nula
  userName!: string;

  @Column("varchar", {
    name: "user_email",
    length: 255,
    nullable: false,
    unique: true,
  })
  userEmail!: string;

  @Column("varchar", { name: "user_password", length: 255, nullable: false })
  userPassword!: string;

  @Column("enum", {
    name: "user_role",
    enum: UserRole,
    nullable: false,
    default: UserRole.CLIENT,
  })
  userRole!: UserRole;

  @Column("varchar", { name: "user_password_iv", length: 255, nullable: false })
  userPasswordIv!: string;

  @Column("varchar", {
    name: "user_password_auth_tag",
    length: 255,
    nullable: false,
  })
  userPasswordAuthTag!: string;
}
