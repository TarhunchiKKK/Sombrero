import { IsNotEmpty } from 'class-validator';

export class CreateQuestionsCategoryDto {
    @IsNotEmpty()
    title: string;
}
