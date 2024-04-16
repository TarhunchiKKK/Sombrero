import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { IUserInfo } from '../models/IUserInfo';

export interface ILoginResult {
    user: IUserInfo;
    token: string;
}

export async function login(email: string, password: string): Promise<ILoginResult | undefined> {
    const { data } = await axios.post<ILoginResult | undefined>(`${SERVER_URL}/auth/login`, {
        email: email,
        password: password,
    });
    return data;
}
