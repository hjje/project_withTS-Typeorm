
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import { brands } from "./brands"
import { categories } from "./categories"

@Entity()
export class products {

    @PrimaryGeneratedColumn({ type:'int' })
    id!: number

    @Column({ length : 100, nullable: true})
    en_name: string

    @Column({ length : 100, nullable: true})
    kr_name: string
    
    @Column({ length : 1000, nullable: true})
    thumbnail_image_url: string

    @Column({ type: 'decimal', precision: 10, scale: 2 , nullable: true })
    recent_trade_price : number

    @Column({ length : 100, nullable: true})
    model_number : string

    @Column({ length : 100, nullable: true})
    color : string

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    original_price : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at : Date

    @ManyToOne(()=>categories, (category)=>category.category, {nullable: false})
    @JoinColumn({name : 'category_id'})
    category_product : products

    @ManyToOne(()=> brands, (brand)=>brand, {nullable: false})
    @JoinColumn({ name : 'brand_id' })
    brand_products : products

}

