import { CreateAddressDto } from './create-address.dto';

export class CreateUserDto {
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
    photo?: string;
    address: CreateAddressDto;
}
