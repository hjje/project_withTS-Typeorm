import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

// nullable:false  default
// FOREIGN KEY(status_id) REFERENCES statuses(id),
// FOREIGN KEY(buyer_id) REFERENCES users(id),
// FOREIGN KEY(seller_id) REFERENCES users(id),
// FOREIGN KEY(bid_id) REFERENCES bids(id),
@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ nullable: true, type: 'int' })
    status_id!: number

    @Column({ nullable: true, type: 'int' })
    buyer_id!: number

    @Column({ nullable: true, type: 'int' })
    seller_id!: number
    
    @Column({nullable: true, length : 1000})
    bid_id!: number

    @Column({ type: 'decimal', precision: 10, scale: 2 , nullable: true })
    amount? : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at!: Date

}