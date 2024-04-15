import axios from 'axios'
import { SERVER_URL } from '../../../shared'
import { IHelpQuestionsCategory } from '../models/IHelpQuestionCategory'

export async function getHelpQuestions(): Promise<IHelpQuestionsCategory[]> {
    const { data } = await axios.get(`${SERVER_URL}/help/questions`)
    return data
}
