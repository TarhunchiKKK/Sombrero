import { Advertisement } from "src/advertisements/entities/advertisement.entity"
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"

@Entity()
export class Category {
    @PrimaryColumn()
    id: number

    @Column()
    title: string

    // description: string

    @OneToMany(() => Advertisement, (advertisement: Advertisement) => advertisement.category)
    advertisements: Advertisement[] 
}
