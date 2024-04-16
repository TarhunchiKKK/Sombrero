import axios from 'axios';
import { SERVER_URL } from '../../../shared';
import { IRegistrationResult } from '../models/IRegistrationResult';

export async function confirmVerificationCode(email: string, verificationCode: string): Promise<IRegistrationResult> {
    const { data } = await axios.post<IRegistrationResult>(`${SERVER_URL}/auth/confirm`, {
        email: email,
        verificationCode: verificationCode,
    });
    console.log('Axios result: ', data);
    return data;
}
