import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class types {

    @PrimaryGeneratedColumn({ type:'int' })
    id! : number

    @Column({ length : 100, nullable: true })
    name : string
    
}