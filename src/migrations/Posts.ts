import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

// nullable:false  default
// FOREIGN KEY(user_id) REFERENCES users(id),
// FOREIGN KEY(product_id) REFERENCES products(id)
@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable: true})
    user_id!: number
    
    @Column({ length : 1000})
    pic_url?: string

    @Column({nullable: true})
    product_id? : number

    @Column()
    likes? : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at!: Date

}