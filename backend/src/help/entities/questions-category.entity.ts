import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class QuestionsCategory {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ nullable: false })
    title: string;

    @ManyToMany(() => Question, (question: Question) => question.categories)
    @JoinTable()
    questions: Question[];
}
