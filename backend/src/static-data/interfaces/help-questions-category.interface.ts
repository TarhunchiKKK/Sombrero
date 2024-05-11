import { IHelpQuestion } from './help-question.interface';

export interface IHelpQuestionsCategory {
    title: string;
    questions: IHelpQuestion[];
}
