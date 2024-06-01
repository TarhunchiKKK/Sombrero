import { IsNotEmpty } from 'class-validator';
import { QuestionsCategory } from '../entities/questions-category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
    @ApiProperty({ example: 'Как сделать ...', description: 'Help question title' })
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'Чтобы сделать это вам необходимо...', description: 'Answer on help question' })
    @IsNotEmpty()
    answer: string;

    @ApiProperty({ type: () => QuestionsCategory, description: 'Help question initial category' })
    @IsNotEmpty()
    category: QuestionsCategory;
}
