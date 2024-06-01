import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class QuestionsCategory {
    @ApiProperty({ example: '1', description: 'Help questions category id' })
    @PrimaryGeneratedColumn()
    id: Number;

    @ApiProperty({ example: 'Создание предложения', description: 'Help questions category title' })
    @Column({ nullable: false })
    title: string;

    @ApiProperty({ type: () => [Question], description: 'Help questions from this category' })
    @ManyToMany(() => Question, (question: Question) => question.categories)
    @JoinTable()
    questions: Question[];
}
