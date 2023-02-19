// -- migrate:up
// CREATE TABLE bids(
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   user_id INT NOT NULL,
//   type_id INT NOT NULL,
//   option_id INT NOT NULL,
//   price DECIMAL,
//   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
//   FOREIGN KEY(user_id) REFERENCES users(id),
//   FOREIGN KEY(type_id) REFERENCES types(id),
//   FOREIGN KEY(option_id) REFERENCES options(id)
// )

// -- migrate:down
// DROP TABLE bids



import { Entity, PrimaryGeneratedColumn, Column, Binary,CreateDateColumn,UpdateDateColumn } from "typeorm"

// nullable:false  default
@Entity()
export class bids {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ nullable: true })
    user_id!: number

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

}