import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "../addresses/address.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  first_name: string;

  @Column("text")
  last_name: string;

  @Column("text", {
    unique: true,
  })
  email: string;

  @Column("text")
  password: string;

  @Column("text")
  cpf: string;

  @Column("text")
  phone: string;

  @Column("text")
  gender: string;

  @Column("text")
  date_of_birth: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
