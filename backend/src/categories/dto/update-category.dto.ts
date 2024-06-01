import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateCategoryDto {
    @ApiProperty({ example: 'Книги', description: 'Category title' })
    @IsNotEmpty({ message: 'Category title should be provided' })
    @IsString({ message: 'Category title should be a string' })
    @MinLength(4, { message: 'Category title should be more than 4 chars' })
    title: string;
}
