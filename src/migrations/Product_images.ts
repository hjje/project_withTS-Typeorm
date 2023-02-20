



import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

// nullable:false  default

// FOREIGN KEY (product_id) REFERENCES products(id)
@Entity()
export class Product_images {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable: true, length : 1000})
    image_url!: string

    @Column({ nullable : true})
    product_id!: number
}