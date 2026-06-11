import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn("increment") // chave primaria de auto incremento
  id!: number;

  @Column("varchar", { length: 100, nullable: false }) // tamanho 100 e não nula
  name!: string;

  @Column("varchar", { length: 100, nullable: false, unique: true })
  email!: string;

  @Column("varchar", { length: 100, nullable: false })
  password!: string;
}
