import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    status_id: number

    @Column('int')
    buyer_id: number

    @Column('int')
    seller_id: number

    @Column('int')
    bid_id: number

    @Column('decimal', {precision: 10, scale: 2, nullable: true})
    amount: number

    @Column()
    created_at: Date
}