import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm"
import { bids } from "./bids"
import { products } from "./products"

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
// FOREIGN KEY (product_id) REFERENCES products(id)