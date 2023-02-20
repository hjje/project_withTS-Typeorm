
import { Entity, PrimaryGeneratedColumn, Column, Binary,CreateDateColumn,UpdateDateColumn } from "typeorm"

// nullable:false  default
@Entity()
export class User {

constructor(n:number , t:string){
    this.id = n;
    this.name =t;
}

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true, length : 100})
    name!: string

    @Column({unique: true, length : 100})
    email!: string

    @Column({nullable: false})
    password!: number
    
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


}