import { Advertisement } from 'src/advertisements/entities/advertisement.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => Advertisement, (advertisement: Advertisement) => advertisement.category, {
        onDelete: 'SET NULL',
    })
    advertisements: Advertisement[];
}
