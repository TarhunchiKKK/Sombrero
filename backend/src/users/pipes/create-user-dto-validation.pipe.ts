import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { Address, Countries } from '../entities/address.entity';
import { CreateAddressDto } from '../dto/create-address.dto';
import { UserValidator } from './user.validator';

export class CreateUserDtoValidationPipe implements PipeTransform<CreateUserDto> {
    private readonly userValidator: UserValidator;

    constructor() {
        this.userValidator = new UserValidator();
    }

    transform(value: CreateUserDto, metadata: ArgumentMetadata) {
        this.userValidator.validateName(value.name);
        this.userValidator.validateSurname(value.surname);
        this.userValidator.validateEmail(value.email);
        this.userValidator.validatePassword(value.password);
        this.userValidator.validateCountry(value.address.country);
        this.userValidator.validateCity(value.address.city);
        this.userValidator.validateHouseNumber(value.address.houseNumber);
        this.userValidator.validateFlatNumber(value.address.flatNumber);
        return value;
    }
}
