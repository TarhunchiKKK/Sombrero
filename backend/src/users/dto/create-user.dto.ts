import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'victorbarinov@gmail.com', description: 'User email' })
    @IsNotEmpty({ message: 'Email should be provided' })
    @IsEmail(undefined, { message: 'Incorrect email format' })
    email: string;

    @ApiProperty({ example: '123456789', description: 'User password' })
    @IsNotEmpty({ message: 'Password should be provided' })
    @MinLength(6, { message: 'Password shoulb be more than 6 letters' })
    password: string;
}
