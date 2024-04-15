import { getDefaultCategory, ICategory } from '../../category/models/ICategory';
import { getDefaultUser, IUser } from '../../user/models/IUser';

export interface IAdvertisement {
    id: number;
    title: string;
    description: string;
    price: number;
    saleStatus: boolean;
    photo: string;
    category: ICategory;
    vendor: IUser;
    wishedUsers: IUser[];
    buyer: IUser;
}

export function getDefaultAdvertisement(): IAdvertisement {
    return {
        id: 0,
        title: '',
        description: '',
        price: 0,
        saleStatus: false,
        photo: '',
        category: getDefaultCategory(),
        vendor: getDefaultUser(),
        wishedUsers: [],
        buyer: getDefaultUser(),
    };
}
