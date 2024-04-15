import { IAdvertisement } from '../../advertisement';

export interface ICategory {
    id: number;
    title: string;
    advertisements: IAdvertisement[];
}
