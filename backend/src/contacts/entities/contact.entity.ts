import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'Person id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'Дмитрий', description: 'Person name' })
    @Column({ nullable: false })
    name: string;

    @ApiProperty({ example: 'Менеджер', description: 'Person post' })
    @Column({ nullable: false })
    post: string;

    @ApiProperty({ example: 'EW98hFC7RZ3OehcEYHCEd3XuM8q5QKbt.png', description: 'Person image' })
    @Column({ nullable: true })
    photo: string;

    @ApiProperty({ example: 'Открыт к разговору 24 часа в сутки', description: 'Some words about person' })
    @Column({ nullable: false })
    about: string;
}
