
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Types {


    @PrimaryGeneratedColumn()
    id!: number


    @Column({nullable: true, length : 100})
    name?: string
}