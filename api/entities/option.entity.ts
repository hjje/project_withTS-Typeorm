import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    size!: string

    @Column()
    product_id!: number
}