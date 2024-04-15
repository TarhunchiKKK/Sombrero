import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { IAdvertisement } from '../models/IAdvertisement.ts';

export async function getOneAdvertisement(id: number): Promise<IAdvertisement> {
    const { data } = await axios.get<IAdvertisement>(`${SERVER_URL}/advertisements/${id}`);
    return data;
}
