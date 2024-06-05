import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ScreenSizes } from '../enums/screen-size.enum';

@Entity()
export class StoredFile {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'Special file id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'BLg4CPSHJ3WPvXbY1vDfQOPQ8HYxajge.jpeg', description: 'Special file name' })
    @Column({ nullable: false })
    filename: string;

    @ApiProperty({ enum: ScreenSizes, description: 'Screen size for this file' })
    @Column({ nullable: true })
    screenSize: ScreenSizes;
}
