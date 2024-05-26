import { IsNotEmpty } from 'class-validator';
import { Question } from '../entities/question.entity';
import { QuestionsCategory } from '../entities/questions-category.entity';

export class AddQuestionToCategryDto {
    @IsNotEmpty()
    question: Question;

    @IsNotEmpty()
    category: QuestionsCategory;
}
