import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm"
import { bids } from "./bid.entity"
import { statuses } from "./status_entity"
import { users } from "./user.entity"

@Entity()
export class orders {

    @PrimaryGeneratedColumn({ type:'int' })
    id!: number

    @Column({ type: 'decimal', precision: 10, scale: 2 , nullable: true })
    amount : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at : Date

    @ManyToOne(() => statuses, (status)=>status, { nullable: false })
    @JoinColumn({ name : 'status_id' })
    status : statuses

    @ManyToOne(() => users, (user)=>user, { nullable: false })
    @JoinColumn({ name : 'buyer_id' })
    buyer_user: users

    @ManyToOne(() => users, (user)=>user, { nullable: false })
    @JoinColumn({ name : 'seller_id' })
    seller_user: users

    @ManyToOne(() => bids, (bid)=>bid, { nullable: false })
    @JoinColumn({ name : 'bid_id' })
    order_bid: bids

}
