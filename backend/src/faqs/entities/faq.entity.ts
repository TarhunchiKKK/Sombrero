import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Faq {
    @ApiProperty({ example: '1', description: 'Faq id' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Как мне создать предложение?', description: 'Question' })
    @Column({ nullable: false })
    question: string;

    @ApiProperty({ example: 'Чтобы создать предложение вам необходимо...', description: 'Answer' })
    @Column({ nullable: false })
    answer: string;
}
