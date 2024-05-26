import { IsNotEmpty } from 'class-validator';
import { QuestionsCategory } from '../entities/questions-category.entity';

export class CreateQuestionDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    answer: string;

    @IsNotEmpty()
    category: QuestionsCategory;
}
