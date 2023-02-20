import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    brand_id!: number

    @Column()
    en_name!: string

    @Column()
    kr_name!: string

    @Column()
    thumbnail_image!: string

    @Column()
    recent_trade_price!: number

    @Column()
    model_number!: string

    @Column()
    release_date!: Date

    @Column()
    color!: string
}