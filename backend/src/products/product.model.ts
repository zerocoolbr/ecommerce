import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  title: string;

  @Column("text")
  description: string;

  @Column("decimal")
  price: number;

  @Column("text")
  image: string;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
