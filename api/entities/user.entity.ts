import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nickname!: string

    @Column()
    email!: string

    @Column()
    password!: number

    @Column()
    profile_image_url!: string
    
    @Column()
    address!: string

    @Column()
    point!: number

    @Column()
    social_id!: number

    @Column()
    social_type_id!: number

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date
}