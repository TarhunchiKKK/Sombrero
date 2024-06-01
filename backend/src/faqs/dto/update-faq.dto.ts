import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateFaqDto {
    @ApiProperty({ example: 'Как мне создать предложение?', description: 'Question' })
    @IsOptional()
    @IsNotEmpty()
    question?: string;

    @ApiProperty({ example: 'Чтобы создать предложение вам необходимо...', description: 'Answer' })
    @IsOptional()
    @IsNotEmpty()
    answer?: string;
}
