import { IAdvertisement } from '../../advertisement';

export interface ICategory {
    id: number;
    title: string;
    advertisements: IAdvertisement[];
}

export function getDefaultCategory(): ICategory {
    return {
        id: 0,
        title: '',
        advertisements: [],
    };
}
