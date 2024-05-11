import { ValidationError, Validator, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { CreateAddressDto } from '../dto/create-address.dto';
import { BadRequestException } from '@nestjs/common';
import { Countries } from '../entities/address.entity';

@ValidatorConstraint()
export class AddressValidator implements ValidatorConstraintInterface {
    validate(address: CreateAddressDto): boolean {
        // Country
        if (address.country === undefined || address.country === null) {
            throw new BadRequestException('Country should be provided');
        }

        if (!(address.country in Countries)) {
            throw new BadRequestException('There is mo such country');
        }

        // City
        if (address.city === '' || address.city === undefined || address.city === null) {
            throw new BadRequestException('City should be provided');
        }

        for (const letter of address.city) {
            if ('0' <= letter && letter <= '9') {
                throw new BadRequestException('City name should contains only letters');
            }
        }

        // Street
        if (address.street !== undefined && address.street !== null) {
            if (address.city === '') {
                throw new BadRequestException("Street name can't be an empty string");
            }

            for (const letter of address.street) {
                if ('0' <= letter && letter <= '9') {
                    throw new BadRequestException("Street name can't contains numbers");
                }
            }
        }

        // House number
        if (address.houseNumber !== undefined && address.houseNumber !== null) {
            if (typeof address.houseNumber !== 'number') {
                throw new BadRequestException('House number should contains only letters');
            }

            if (address.houseNumber <= 0) {
                throw new BadRequestException('House number should be grater than zero');
            }
        }

        // Flat number
        if (address.flatNumber !== undefined && address.flatNumber !== null) {
            if (typeof address.flatNumber !== 'number') {
                throw new BadRequestException('Flat number should contains only letters');
            }

            if (address.flatNumber <= 0) {
                throw new BadRequestException('Flat number should be grater than zero');
            }
        }

        return true;
    }
}
