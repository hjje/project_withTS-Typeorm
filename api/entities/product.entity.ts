import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    brand_id: number

    @Column('varchar', {length: 100, nullable: true})
    en_name: string

    @Column('varchar', {length: 100, nullable: true})
    kr_name: string

    @Column('varchar', {length: 1000, nullable: true})
    thumbnail_image: string

    @Column('decimal', {precision: 10, scale: 2, nullable: true})
    recent_trade_price: number

    @Column('varchar', {length: 100, nullable: true})
    model_number: string

    @Column('timestamp')
    release_date: Date

    @Column('varchar', {length: 100, nullable: true})
    color: string

    @Column('int')
    category_id: number

    @Column('decimal', {precision: 10, scale: 2, nullable: true})
    original_price: number

    @CreateDateColumn()
    created_at: Date
}