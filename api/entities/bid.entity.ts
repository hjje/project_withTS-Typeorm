import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bids')
export class Bid {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    user_id: number
    
    @Column('int')
    type_id: number

    @Column('int')
    option_id: number

    @Column('decimal', {precision: 10, scale: 2, nullable: true})
    price: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
}