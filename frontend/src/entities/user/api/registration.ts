import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { IUserInfo } from '../models/IUserInfo';

export interface IRegistrationResult {
    user: IUserInfo;
    token: string;
}

export async function registration(email: string, password: string) {
    await axios.post(`${SERVER_URL}/auth/regisration`, {
        email: email,
        password: password,
    });
}
