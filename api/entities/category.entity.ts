import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { products } from './product.entity'

@Entity()
export class categories {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number

    @Column({nullable: true, length : 100})
    name : string

    @OneToMany(()=>products, (product)=>product.category_product)
    category : categories
}