import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: number;
  @Column()
  description: string;
  @Column()
  quantity: number;
  @Column()
  price: number;
  @Column()
  added_at: Date;
}
