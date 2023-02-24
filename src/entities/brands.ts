import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class brands {
    
    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number

    @Column({ nullable: true, length : 20 })
    name: string
}