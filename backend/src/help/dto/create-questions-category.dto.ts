import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateQuestionsCategoryDto {
    @ApiProperty({ example: 'Создание предложения', description: 'Help questions category title' })
    @IsNotEmpty()
    title: string;
}
