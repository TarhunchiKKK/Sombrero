import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserValidator } from './user.validator';

export class UpdateUserDtoValidationPipe
    implements PipeTransform<UpdateUserDto>
{
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
        if (value.address) {
            this.userValidator.validateAddress(value.address);
        }
        return value;
    }
}
