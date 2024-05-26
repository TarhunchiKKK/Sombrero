import axios from 'axios'
import { SERVER_URL } from '../../../shared'
import { IFaq } from '../models/IFaq'

export async function getFaqs(): Promise<IFaq[]> {
    const { data } = await axios.get<IFaq[]>(`${SERVER_URL}/help/faqs`)
    return data
}
