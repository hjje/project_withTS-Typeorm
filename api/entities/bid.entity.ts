import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bid {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: number
    
    @Column()
    type_id!: number

    @Column()
    option_id!: number

    @Column()
    price!: number

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date
}