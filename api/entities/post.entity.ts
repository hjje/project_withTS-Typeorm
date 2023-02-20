import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number

    @Column()
    post_image_url!: string

    @Column()
    product_id!: number

    @Column()
    likes!: number

    @Column()
    created_at!: Date

    @Column()
    feed_text!: string
}