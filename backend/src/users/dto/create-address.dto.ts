import { IsAlpha, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { Countries } from '../entities/address.entity';

export class CreateAddressDto {
    @IsNotEmpty({ message: 'Country should be provided' })
    @IsEnum(Countries, { message: 'There is mo such country' })
    country: Countries;

    @IsNotEmpty({ message: 'City name should be provided' })
    @IsAlpha('en-US', { message: 'City name should contains only letters' })
    city: string;

    @IsOptional()
    @IsNotEmpty({ message: "Street name can't be an empty string" })
    @IsAlpha(undefined, { message: "Street name can't contains numbers" })
    street?: string;

    @IsOptional()
    @IsNotEmpty({ message: "House number can't be empty" })
    @IsNumber(undefined, { message: 'House number should contains only letters' })
    @IsPositive({ message: 'House number should be grater than zero' })
    houseNumber?: number;

    @IsOptional()
    @IsNotEmpty({ message: "Flat number can't be empty" })
    @IsNumber(undefined, { message: 'Flat number cannot contains letters' })
    @IsPositive({ message: 'Flat number should be grater than zero' })
    flatNumber?: number;
}
