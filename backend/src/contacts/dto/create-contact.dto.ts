import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty, MinLength } from 'class-validator';

export class CreateContactDto {
    @ApiProperty({ example: 'Дмитрий', description: 'Perosn name' })
    @IsNotEmpty({ message: 'Name should be provided' })
    @IsAlpha('en-US', { message: "Name can't contains numbers" })
    @MinLength(2, { message: "Name can't be less than 2 symbols" })
    name: string;

    @ApiProperty({ example: 'Менеджер', description: 'Person post' })
    @IsNotEmpty({ message: 'Post should be provided' })
    @IsAlpha('en-US', { message: "Post can't contains numbers" })
    @MinLength(2, { message: "Name can't be less than 2 symbols" })
    post: string;

    @ApiProperty({ example: 'Открыт к разговору 24 часа в сутки', description: 'Some words about person' })
    @IsNotEmpty({ message: 'About text should be provided' })
    @MinLength(2, { message: "About can't be less than 2 symbols" })
    about: string;
}
