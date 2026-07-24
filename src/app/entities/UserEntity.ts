import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../../common/enums/user.table.enum";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid") // chave primaria de auto incremento
  userId!: string;

  @Column("varchar", { length: 255, nullable: false }) // tamanho 100 e não nula
  userName!: string;

  @Column("varchar", { length: 255, nullable: false, unique: true })
  userEmail!: string;

  @Column("varchar", { length: 255, nullable: false })
  userPassword!: string;

  @Column("enum", { enum: UserRole, nullable: false, default: UserRole.CLIENT })
  userRole!: UserRole;

  @Column("varchar", { length: 255, nullable: false })
  userPasswordIv!: string;

  @Column("varchar", { length: 255, nullable: false })
  userPasswordAuthTag!: string;
}
