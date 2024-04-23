import { IsEnum, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { Countries } from '../entities/address.entity';

export class CreateAddressDto {
    @IsNotEmpty()
    @IsEnum(Countries, { message: 'There is mo such country' })
    country: Countries;

    @IsNotEmpty()
    city: string;

    @IsOptional()
    street?: string;

    @IsOptional()
    @IsPositive()
    houseNumber?: number;

    @IsOptional()
    @IsPositive()
    flatNumber?: number;
}
