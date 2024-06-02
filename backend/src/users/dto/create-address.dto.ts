import { IsAlpha, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { Countries } from '../enums/countries.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
    @ApiProperty({ description: 'User country', enum: Countries })
    @IsNotEmpty({ message: 'Country should be provided' })
    @IsEnum(Countries, { message: 'There is mo such country' })
    country: Countries;

    @ApiProperty({ example: 'Moscow', description: 'User city' })
    @IsNotEmpty({ message: 'City name should be provided' })
    @IsAlpha('en-US', { message: 'City name should contains only letters' })
    city: string;

    @ApiProperty({ example: 'Ponomarenko', description: 'User street' })
    @IsOptional()
    @IsNotEmpty({ message: "Street name can't be an empty string" })
    @IsAlpha(undefined, { message: "Street name can't contains numbers" })
    street?: string = null;

    @ApiProperty({ example: '45', description: 'User house number' })
    @IsOptional()
    @IsNotEmpty({ message: "House number can't be empty" })
    @IsNumber(undefined, { message: 'House number should contains only letters' })
    @IsPositive({ message: 'House number should be grater than zero' })
    houseNumber?: number = null;

    @ApiProperty({ example: '12', description: 'User flat number' })
    @IsOptional()
    @IsNotEmpty({ message: "Flat number can't be empty" })
    @IsNumber(undefined, { message: 'Flat number cannot contains letters' })
    @IsPositive({ message: 'Flat number should be grater than zero' })
    flatNumber?: number = null;
}
