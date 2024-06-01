import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateCategoryDto {
    @IsNotEmpty({ message: 'Category title should be provided' })
    @IsString({ message: 'Category title should be a string' })
    @MinLength(4, { message: 'Category title should be more than 4 chars' })
    title: string;
}
