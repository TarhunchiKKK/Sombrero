import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class QuestionsCategory {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'Help questions category id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'Создание предложения', description: 'Help questions category title' })
    @Column({ nullable: false })
    title: string;

    @ApiProperty({ type: () => [Question], description: 'Help questions from this category' })
    @ManyToMany(() => Question, (question: Question) => question.categories)
    @JoinTable()
    questions: Question[];
}
