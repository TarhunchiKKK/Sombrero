import { Column, Entity, PrimaryColumn } from "typeorm"

export enum Countries {
    
}

@Entity()
export class Address {
    @PrimaryColumn()
    id: number

    @Column()
    country: Countries

    @Column()
    city: string

    @Column({ nullable: true })
    street: string

    @Column({ nullable: true })
    houseNumber: number

    @Column({ nullable: true })
    flatNumber: number
}