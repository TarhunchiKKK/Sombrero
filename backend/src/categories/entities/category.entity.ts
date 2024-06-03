import { ApiProperty } from '@nestjs/swagger';
import { Advertisement } from 'src/advertisements/entities/advertisement.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'Category id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'Книги', description: 'Category title' })
    @Column()
    title: string;

    @ApiProperty({ type: () => [Advertisement], description: "This category's advertisements" })
    @OneToMany(() => Advertisement, (advertisement: Advertisement) => advertisement.category, {
        onDelete: 'NO ACTION',
    })
    advertisements: Advertisement[];
}
