import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { users } from './users'
import { types } from './types'
import { options } from './options'

@Entity()
export class bids {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number

    @Column({ type: 'decimal', precision: 10, scale: 2 , nullable: true })
    price? : number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at : Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", nullable : true })
    public updated_at : Date

    @ManyToOne(()=> users, (user) => user,{ nullable: false })
    @JoinColumn({ name : 'user_id', referencedColumnName: 'id' })
    user: users

    @ManyToOne(()=>types,(type)=>type,{ nullable: false })
    @JoinColumn({ name: 'type_id' })
    type: types

    @ManyToOne(() => options, (option)=>option,{ nullable: false })
    @JoinColumn({ name : 'option_id' })
    option: options

}

// FOREIGN KEY(user_id) REFERENCES users(id),
// FOREIGN KEY(type_id) REFERENCES types(id),
// FOREIGN KEY(option_id) REFERENCES options(id)