import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('statuses')
export class Status {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 200, nullable: true})
    name: string
}