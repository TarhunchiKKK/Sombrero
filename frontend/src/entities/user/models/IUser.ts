import { IAdvertisement } from '../../advertisement';

export interface IUser {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    address: {};
    salesList: IAdvertisement[];
    wishList: IAdvertisement[];
    purchasesList: IAdvertisement[];
}
