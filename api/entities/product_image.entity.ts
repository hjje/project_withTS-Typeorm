import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product_Image {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    imgae_url!: string

    @Column()
    product_id!: number
}