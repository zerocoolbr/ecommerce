import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../users/user.model";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.addresses, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column("text")
  zip_code: string;

  @Column("text")
  country: string;

  @Column("text")
  state: string;

  @Column("text")
  city: string;

  @Column("text")
  adress_line_1: string;

  @Column("text", {
    nullable: true
  })
  adress_line_2: string;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
