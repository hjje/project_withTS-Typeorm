
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

// nullable:false  default
// FOREIGN KEY (brand_id) REFERENCES brands(id),
// FOREIGN KEY (category_id) REFERENCES categories(id)
@Entity()
export class Products {

    constructor(original_price: number) {
        this.original_price = original_price;
    }


    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable: true, length : 100})
    brand_id!: number

    @Column({ length : 100})
    en_name!: string

    @Column({ length : 100})
    kr_name!: string
    
    @Column({nullable: true, length : 1000})
    thumbnail_image_url?: string

    @Column({ type: 'decimal', precision: 10, scale: 2 , nullable: true })
    recent_trade_price? : string

    @Column({ length : 100})
    model_number? : string

    @Column({ length : 100})
    color?: string

    @Column({nullable : true})
    category_id? : number

    @Column({ type: 'decimal', precision: 10, scale: 2 , nullable: true })
    original_price : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at!: Date

}