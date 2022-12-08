import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()

export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column()
  status: string;
  @Column()
  ordered_at: Date;
}
