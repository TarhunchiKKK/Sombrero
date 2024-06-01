import {
    IsAlpha,
    IsEmail,
    IsNotEmpty,
    IsObject,
    IsOptional,
    MinLength,
    Validate,
    ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './create-address.dto';
import { PhoneValidator } from '../validators/phone.validator';
import { AddressValidator } from '../validators/address.validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name should be provided' })
    @IsAlpha('en-US', { message: "Name can't contains numbers" })
    @MinLength(2, { message: "Name can't be less than 2 symbols" })
    name: string = '';

    @IsNotEmpty({ message: 'Surname should be provided' })
    @IsAlpha('en-US', { message: "Surname can't contains numbers" })
    @MinLength(2, { message: "Surname can't be less than 2 symbols" })
    surname: string = '';

    @IsOptional()
    @IsNotEmpty({ message: "Phone can't be empty" })
    @Validate(PhoneValidator, { message: "Phone number should starts with '+' and should not contains letters" })
    phoneNumber?: string = '';

    @IsNotEmpty({ message: 'Email should be provided' })
    @IsEmail(undefined, { message: 'Incorrect email format' })
    email: string;

    @IsNotEmpty({ message: 'Password should be provided' })
    @MinLength(6, { message: 'Password shoulb be more than 6 letters' })
    password: string;

    @IsOptional()
    @IsObject({ message: 'Incorrect address' })
    @ValidateNested()
    @Validate(AddressValidator)
    address?: CreateAddressDto;
}
