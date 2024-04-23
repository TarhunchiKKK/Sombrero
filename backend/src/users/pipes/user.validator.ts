import { BadRequestException } from '@nestjs/common';
import { Countries } from '../entities/address.entity';

export class UserValidator {
    validateName(name: string) {
        if (name === '' || name === undefined || name === null) {
            throw new BadRequestException('Name cannot be empty');
        }

        if (name.length <= 2) {
            throw new BadRequestException('Name cannot be less than 2 symbols');
        }

        const numbers: string = '0123456789';
        for (let symbol of name) {
            if (numbers.includes(symbol)) {
                throw new BadRequestException('Name cannot contain numbers');
            }
        }
    }

    validateSurname(surname: string) {
        if (surname === '' || surname === undefined || surname === null) {
            throw new BadRequestException('Surname cannot be empty');
        }

        if (surname.length <= 2) {
            throw new BadRequestException('Surname cannot be less than 2 symbols');
        }

        const numbers: string = '0123456789';
        for (let symbol of surname) {
            if (numbers.includes(symbol)) {
                throw new BadRequestException('Surname cannot contain numbers');
            }
        }
    }

    validateEmail(email: string) {
        const regexp = /@gmail|@mail|@yandex{.ru,.com}/;
        if (!regexp.test(email)) {
            throw new BadRequestException('Incorrct email');
        }
    }

    validatePassword(password: string) {
        if (password === '' || password === null || password === undefined) {
            throw new BadRequestException('Password should be provided');
        }

        if (password.length < 6) {
            throw new BadRequestException('Password should be more than 6 symbols');
        }
    }

    validateCountry(country: Countries) {
        if (!(country in Countries)) {
            throw new BadRequestException('No such country');
        }
    }

    validateCity(city: string) {
        if (city === '' || city === null || city === undefined) {
            throw new BadRequestException('City should be provided');
        }
    }

    validateHouseNumber(houseNumber: number) {
        if (houseNumber <= 0) {
            throw new BadRequestException('House number cannot be less than 1');
        }
    }

    validateFlatNumber(flatNumber: number) {
        if (flatNumber <= 0) {
            throw new BadRequestException('Flat number cannot be less than 1');
        }
    }
}
