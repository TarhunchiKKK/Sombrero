import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionsCategory } from './questions-category.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Question {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'Help question id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'Как сделать ...', description: 'Help question title' })
    @Column({ nullable: false })
    title: string;

    @ApiProperty({ example: 'Чтобы сделать это вам необходимо...', description: 'Answer on help question' })
    @Column({ nullable: false })
    answer: string;

    @ApiProperty({ type: () => [QuestionsCategory], description: 'Help question categories' })
    @ManyToMany(() => QuestionsCategory, (category: QuestionsCategory) => category.questions)
    categories: QuestionsCategory[];
}
