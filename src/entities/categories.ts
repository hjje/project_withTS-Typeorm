import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany} from "typeorm"
import { products } from './products'
@Entity()
export class categories {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number

    @Column({nullable: true, length : 100})
    name : string

    @OneToMany(()=>products, (product)=>product.category_product)
    category : categories
}

// FOREIGN KEY (brand_id) REFERENCES brands(id),
// FOREIGN KEY (category_id) REFERENCES categories(id)