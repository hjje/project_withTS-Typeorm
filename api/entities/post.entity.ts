import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm"
import { User } from "./user.entity";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    user_id: number

    @Column('varchar', {length: 1000, nullable: true})
    post_image_url: string

    @Column('int')
    product_id: number

    @Column('int', {nullable: true})
    likes: number

    @Column()
    created_at: Date

    @Column('varchar', {length: 1000, nullable: true})
    feed_text: string

    @ManyToOne(() => User, (users) => users.posts)
    users: User
}