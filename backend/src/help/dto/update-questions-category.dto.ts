import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateQuestionsCategoryDto {
    @ApiProperty({ example: 'Создание предложения', description: 'Help questions category title' })
    @IsOptional()
    @IsNotEmpty()
    title?: string;
}
