import { IsAlpha, IsEmail, IsNotEmpty, IsObject, IsOptional, MinLength, Validate } from 'class-validator';
import { PhoneValidator } from '../validators/phone.validator';
import { CreateAddressDto } from './create-address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({ example: 'Victor', description: 'User name' })
    @IsOptional()
    @IsNotEmpty({ message: 'Name should be provided' })
    @IsAlpha('en-US', { message: "Name can't contains numbers" })
    @MinLength(2, { message: "Name can't be less than 2 symbols" })
    name?: string;

    @ApiProperty({ example: 'Barinov', description: 'User surname' })
    @IsOptional()
    @IsNotEmpty({ message: 'Surname should be provided' })
    @IsAlpha('en-US', { message: "Surname can't contains numbers" })
    @MinLength(2, { message: "Surname can't be less than 2 symbols" })
    surname?: string;

    @ApiProperty({ example: '+375298672635', description: 'User phone number' })
    @IsOptional()
    @IsNotEmpty({ message: "Phone can't be empty" })
    @Validate(PhoneValidator, { message: "Phone number should starts with '+' and should not contains letters" })
    phoneNumber?: string;

    @ApiProperty({ example: 'victorbarinov@gmail.com', description: 'User email' })
    @IsOptional()
    @IsNotEmpty({ message: 'Email should be provided' })
    @IsEmail(undefined, { message: 'Incorrect email format' })
    email?: string;

    @ApiProperty({ example: '123456789', description: 'User password' })
    @IsOptional()
    @IsNotEmpty({ message: 'Password should be provided' })
    @MinLength(6, { message: 'Password shoulb be more than 6 letters' })
    password?: string;

    @ApiProperty({ type: () => CreateAddressDto, description: 'User address' })
    @IsOptional()
    @IsObject({ message: 'Incorrect address' })
    address?: CreateAddressDto;
}
