import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuestionDto {
    @ApiProperty({ example: 'Как сделать ...', description: 'Help question title' })
    @IsOptional()
    @IsNotEmpty()
    title?: string;

    @ApiProperty({ example: 'Чтобы сделать это вам необходимо...', description: 'Answer on help question' })
    @IsOptional()
    @IsNotEmpty()
    answer?: string;
}
