import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { QuestionsCategory } from '../entities/questions-category.entity';

export class UpdateQuestionDto {
    @IsOptional()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsNotEmpty()
    answer?: string;
}
