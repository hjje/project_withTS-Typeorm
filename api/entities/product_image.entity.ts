import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_images')
export class Product_Image {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 1000, nullable: true})
    imgae_url: string

    @Column('int')
    product_id: number
}