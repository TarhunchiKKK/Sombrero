import axios from 'axios';
import { SERVER_URL } from '../../../shared';

export async function likeAdvertisement(userId: number, advertisementId: number): Promise<void> {
    await axios.post(`${SERVER_URL}/advertisements/like`, {
        user: {
            id: +userId,
        },
        advertisement: {
            id: +advertisementId,
        },
    });
}
