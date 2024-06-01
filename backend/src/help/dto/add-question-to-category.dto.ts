import { IsNotEmpty } from 'class-validator';
import { Question } from '../entities/question.entity';
import { QuestionsCategory } from '../entities/questions-category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class AddQuestionToCategryDto {
    @ApiProperty({ type: () => Question, description: 'Help question (need to extract question id)' })
    @IsNotEmpty()
    question: Question;

    @ApiProperty({
        type: () => QuestionsCategory,
        description: 'Help questions category (need to extract questions category id)',
    })
    @IsNotEmpty()
    category: QuestionsCategory;
}
