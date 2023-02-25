import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('options')
export class Option {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 50, nullable: true})
    size: string

    @Column('int')
    product_id: number
}