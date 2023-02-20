import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    status_id!: number

    @Column()
    buyer_id!: number

    @Column()
    seller_id!: number

    @Column()
    bid_id!: number

    @Column()
    amount!: number

    @Column()
    created_at!: Date
}