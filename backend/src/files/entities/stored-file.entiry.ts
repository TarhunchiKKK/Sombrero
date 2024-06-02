import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StoredFile {
    @ApiProperty({ example: '1', description: 'Special file id' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'BLg4CPSHJ3WPvXbY1vDfQOPQ8HYxajge.jpeg', description: 'Special file name' })
    @Column({ nullable: false })
    filename: string;
}
