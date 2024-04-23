import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { IAdvertisementInfo } from '../models/IAdvertisementInfo';

export async function getAdvertisements(categoryId: number | null): Promise<IAdvertisementInfo[]> {
    const { data } = await axios.get(`${SERVER_URL}/advertisements`, {
        params: {
            category: categoryId,
        },
    });
    return data;
}
