import { IsAlpha, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateContactDto {
    @IsNotEmpty({ message: 'Name should be provided' })
    @IsAlpha('en-US', { message: "Name can't contains numbers" })
    @MinLength(2, { message: "Name can't be less than 2 symbols" })
    name: string;

    @IsNotEmpty({ message: 'Post should be provided' })
    @IsAlpha('en-US', { message: "Post can't contains numbers" })
    @MinLength(2, { message: "Name can't be less than 2 symbols" })
    post: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Photo should be provided' })
    photo?: string;

    @IsNotEmpty({ message: 'About text should be provided' })
    @MinLength(2, { message: "About can't be less than 2 symbols" })
    about: string;
}
