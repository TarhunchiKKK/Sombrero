import { IsNotEmpty, IsOptional } from 'class-validator';
import { Question } from '../entities/question.entity';

export class UpdateQuestionsCategoryDto {
    @IsOptional()
    @IsNotEmpty()
    title?: string;
}
