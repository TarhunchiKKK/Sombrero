import axios from 'axios';
import { IUser } from '../models/IUser';
import { SERVER_URL } from '../../../shared';

export async function getUser(userId: number): Promise<IUser> {
    const { data } = await axios.get(`${SERVER_URL}/users/${userId}`);
    return data;
}
