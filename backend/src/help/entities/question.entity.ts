import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionsCategory } from './questions-category.entity';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    answer: string;

    @ManyToMany(() => QuestionsCategory, (category: QuestionsCategory) => category.questions)
    categories: QuestionsCategory[];
}
