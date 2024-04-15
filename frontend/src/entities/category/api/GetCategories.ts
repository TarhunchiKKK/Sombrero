import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { ICategoryInfo } from '../models/ICategoryInfo';

export async function getCategories(): Promise<ICategoryInfo[]> {
    const { data } = await axios.get<ICategoryInfo[]>(`${SERVER_URL}/categories`);
    return data;
}
