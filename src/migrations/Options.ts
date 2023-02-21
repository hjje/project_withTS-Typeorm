
//   size VARCHAR(50),
//   product_id INT NOT NULL,

//   FOREIGN KEY (product_id) REFERENCES products(id)
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Options {

    constructor(size : string, product_id: number) {
        this.product_id = product_id
        this.size = size
    }

    @PrimaryGeneratedColumn()
    id!: number


    @Column({nullable: true, length : 50})
    size: string

    @Column({nullable: true , type : 'int'})
    product_id : number
}