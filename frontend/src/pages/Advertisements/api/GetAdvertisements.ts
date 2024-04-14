import axios from 'axios';
import { IAdvertisement } from '../../../entities';
import { SERVER_URL } from '../../../shared';

export async function GetAdvertisements(): Promise<IAdvertisement[]> {
    const { data } = await axios.get(`${SERVER_URL}/advertisements`);
    return data;
}
