import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Faq {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'Faq id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'Как мне создать предложение?', description: 'Question' })
    @Column({ nullable: false })
    question: string;

    @ApiProperty({ example: 'Чтобы создать предложение вам необходимо...', description: 'Answer' })
    @Column({ nullable: false })
    answer: string;
}
