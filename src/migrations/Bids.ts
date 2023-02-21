import { Entity, PrimaryGeneratedColumn, Column, Binary,CreateDateColumn,UpdateDateColumn, OneToOne, OneToMany } from "typeorm"
import { Users } from './Users'
import { Types } from './Types'

@Entity()
export class bids {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ nullable: true })
    user_id!: number

    @Column({ nullable: true })
    type_id!: number

    @Column({unique: true, length : 100})
    email!: string

    @Column({nullable: false})
    password!: Binary
    
    @Column({nullable: true, length : 1000})
    profile_image_url?: string

    @Column({length : 1000})
    address! : string

    @Column({ type: 'decimal', precision: 10, scale: 2 , nullable: true })
    point? : number

    @Column()
    social_id?: number

    @Column()
    social_type_id? : BigInteger

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at!: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at!: Date

    @OneToOne(() => Users)
    user!: Users

    @OneToOne(()=>Types )
    type!: Types

}

//   FOREIGN KEY(user_id) REFERENCES users(id),
//   FOREIGN KEY(type_id) REFERENCES types(id),
//   FOREIGN KEY(option_id) REFERENCES options(id)

