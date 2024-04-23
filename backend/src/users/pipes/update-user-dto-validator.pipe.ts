import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserValidator } from './user.validator';

export class UpdateUserDtoValidationPipe implements PipeTransform<UpdateUserDto> {
    private readonly userValidator: UserValidator;

    constructor() {
        this.userValidator = new UserValidator();
    }

    transform(value: UpdateUserDto, metadata: ArgumentMetadata) {
        if (value.name) {
            this.userValidator.validateName(value.name);
        }
        if (value.surname) {
            this.userValidator.validateSurname(value.surname);
        }
        if (value.email) {
            this.userValidator.validateEmail(value.email);
        }
        if (value.password) {
            this.userValidator.validatePassword(value.password);
        }
        if (value.address?.country) {
            this.userValidator.validateCountry(value.address.country);
        }
        if (value.address?.city) {
            this.userValidator.validateCity(value.address.city);
        }
        if (value.address?.houseNumber) {
            this.userValidator.validateHouseNumber(value.address.houseNumber);
        }
        if (value.address?.flatNumber) {
            this.userValidator.validateFlatNumber(value.address.flatNumber);
        }
        return value;
    }
}
