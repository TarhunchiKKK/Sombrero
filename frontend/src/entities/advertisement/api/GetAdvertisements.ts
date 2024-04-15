import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { IAdvertisementInfo } from '../models/IAdvertisementInfo';

export async function getAdvertisements(): Promise<IAdvertisementInfo[]> {
    const { data } = await axios.get(`${SERVER_URL}/advertisements`);
    return data;
}
