import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from "typeorm"

@Entity()
export class users {

    @PrimaryGeneratedColumn({ type:'int' })
    id! : number

    @Column({ length : 100, nullable: true})
    nickname : string

    @Column({ length : 100, nullable: true})
    email : string

    @Column({ type:'binary', nullable: true })
    password : number
    
    @Column({ length : 1000, nullable: true})
    profile_image_url : string

    @Column({length : 1000, nullable: true})
    address : string

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    point : number

    @Column({ type:'bigint', nullable: true })
    social_id : number | string

    @Column({ type:'int', nullable: true })
    social_type_id : number | string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", nullable: true })
    public updated_at: Date

}