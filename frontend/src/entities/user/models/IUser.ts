import { IAdvertisement } from '../../advertisement';

export interface IUser {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    photo: string;
    address: {
        id: number;
        country: string;
        city: string;
        street?: string;
        houseNumber?: number;
        flatNumber?: number;
    };
    salesList: IAdvertisement[];
    wishList: IAdvertisement[];
    purchasesList: IAdvertisement[];
}

export function getDefaultUser(): IUser {
    return {
        id: 0,
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        photo: '',
        address: {
            id: 0,
            country: '',
            city: '',
            street: '',
            houseNumber: 0,
            flatNumber: 0,
        },
        salesList: [],
        wishList: [],
        purchasesList: [],
    };
}
