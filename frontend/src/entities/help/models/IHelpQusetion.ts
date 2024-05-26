import { IHelpQuestionsCategory } from './IHelpQuestionCategory';

export interface IHelpQuestion {
    id: number;
    title: string;
    answer: string;
    category?: IHelpQuestionsCategory;
}
