import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { products } from "./product.entity"

@Entity()
export class options {

    @PrimaryGeneratedColumn( {type:'int'} )
    id!: number

    @Column({ nullable: true, length : 50})
    size: string

    @ManyToOne(()=>products,(product)=>product, {nullable: false} )
    @JoinColumn({name: 'product_id'})
    product: products

}
