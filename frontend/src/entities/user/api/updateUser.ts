import axios from 'axios';
import { SERVER_URL } from '../../../shared';

export interface IUpdateUserDto {
    name?: string;
    surname?: string;
    phoneNumber?: string;
    photo?: string;
    address?: {
        country?: string;
        city?: string;
        street?: string;
        houseNumber?: string;
        flatNumber?: string;
    };
}

export async function updateUser(userId: number, updateUserDto: IUpdateUserDto): Promise<void> {
    const data = {
        name: updateUserDto.name ?? undefined,
        surname: updateUserDto.surname ?? undefined,
        phoneNumber: updateUserDto.phoneNumber ?? undefined,
        photo: updateUserDto.photo ?? undefined,
        address: {
            country: updateUserDto.address!.country ?? undefined,
            city: updateUserDto.address!.city ?? undefined,
            street: updateUserDto.address!.street ?? undefined,
            houseNumber: updateUserDto.address!.houseNumber ?? undefined,
            flatNumber: updateUserDto.address!.flatNumber ?? undefined,
        },
    };

    console.log(data);

    await axios.patch(`${SERVER_URL}/users/${userId}`, data);
}
