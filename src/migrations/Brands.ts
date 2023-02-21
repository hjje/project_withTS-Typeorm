import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Brands {

    constructor(name : string) {
        this.name = name
    }

    @PrimaryGeneratedColumn()
    id!: number


    @Column({nullable: true, length : 20})
    name: string
}