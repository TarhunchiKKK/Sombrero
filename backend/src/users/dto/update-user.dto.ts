import { IsAlpha, IsEmail, IsNotEmpty, IsObject, IsOptional, MinLength, Validate } from 'class-validator';
import { PhoneValidator } from '../validators/phone.validator';
import { CreateAddressDto } from './create-address.dto';

export class UpdateUserDto {
    @IsOptional()
    @IsNotEmpty({ message: 'Name should be provided' })
    @IsAlpha('en-US', { message: "Name can't contains numbers" })
    @MinLength(2, { message: "Name can't be less than 2 symbols" })
    name?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Surname should be provided' })
    @IsAlpha('en-US', { message: "Surname can't contains numbers" })
    @MinLength(2, { message: "Surname can't be less than 2 symbols" })
    surname?: string;

    @IsOptional()
    @IsNotEmpty({ message: "Phone can't be empty" })
    @Validate(PhoneValidator, { message: "Phone number should starts with '+' and should not contains letters" })
    phoneNumber?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Email should be provided' })
    @IsEmail(undefined, { message: 'Incorrect email format' })
    email?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Password should be provided' })
    @MinLength(6, { message: 'Password shoulb be more than 6 letters' })
    password?: string;

    @IsOptional()
    @IsObject({ message: 'Incorrect address' })
    address?: CreateAddressDto;
}
