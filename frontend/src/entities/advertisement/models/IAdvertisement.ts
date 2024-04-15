import { ICategory } from '../../category/models/ICategory';
import { IUser } from '../../user/models/IUser';

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
