import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionsCategory } from './questions-category.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Question {
    @ApiProperty({ example: '1', description: 'Help question id' })
    @PrimaryGeneratedColumn()
    id: number;

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
