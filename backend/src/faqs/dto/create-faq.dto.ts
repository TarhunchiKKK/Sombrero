import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFaqDto {
    @ApiProperty({ example: 'Как мне создать предложение?', description: 'Question' })
    @IsNotEmpty()
    question: string;

    @ApiProperty({ example: 'Чтобы создать предложение вам необходимо...', description: 'Answer' })
    @IsNotEmpty()
    answer: string;
}
