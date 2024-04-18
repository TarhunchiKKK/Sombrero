import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { IUserInfo } from '../models/IUserInfo';

export async function getProfile(): Promise<IUserInfo | undefined> {
    const { data } = await axios.get<IUserInfo>(`${SERVER_URL}/auth/profile`);
    return data ? data : undefined;
}
