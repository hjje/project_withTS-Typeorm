import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm"
import { Post } from "./post.entity"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {length: 100})
    nickname: string

    @Column("varchar", {length: 100, nullable: true})
    email: string

    @Column("int")
    password: number

    @Column("varchar", {length: 1000, nullable: true})
    profile_image_url: string
    
    @Column("varchar", {length: 500, nullable: true})
    address: string

    @Column("decimal", {precision: 10, scale: 2, nullable: true})
    point: number

    @Column("bigint")
    social_id: string

    @Column("int")
    social_type_id: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Post, (posts) => posts.user_id)
    posts: Post[]
}