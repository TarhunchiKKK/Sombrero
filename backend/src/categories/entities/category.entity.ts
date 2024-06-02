import { ApiProperty } from '@nestjs/swagger';
import { Advertisement } from 'src/advertisements/entities/advertisement.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @ApiProperty({ example: '1', description: 'Category id' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Книги', description: 'Category title' })
    @Column()
    title: string;

    @ApiProperty({ type: () => [Advertisement], description: "This category's advertisements" })
    @OneToMany(() => Advertisement, (advertisement: Advertisement) => advertisement.category, {
        onDelete: 'NO ACTION',
    })
    advertisements: Advertisement[];
}
