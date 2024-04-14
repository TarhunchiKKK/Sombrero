import axios from 'axios';
import { ICategory } from '../../../entities';
import { SERVER_URL } from '../../../shared';

export async function GetCategories(): Promise<ICategory[]> {
    const { data } = await axios.get<ICategory[]>(`${SERVER_URL}/categories`);
    return data;
}
