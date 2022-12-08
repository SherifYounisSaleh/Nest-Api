import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class OrderProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  order_id: number;
  @Column()
  product_id: number;
  @Column()
  quantity: number;
}
