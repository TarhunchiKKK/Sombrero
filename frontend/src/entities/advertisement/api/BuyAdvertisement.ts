import axios from 'axios';
import { SERVER_URL } from '../../../shared';

export async function buyAdvertisement(advertisementId: number, userId: number) {
    await axios.post(`${SERVER_URL}/advertisements/buy`, {
        user: {
            id: +userId,
        },
        advertisement: {
            id: +advertisementId,
        },
    });
}
