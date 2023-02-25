import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('types')
export class Type {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 50, nullable: true})
    name: string
}