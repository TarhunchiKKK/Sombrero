import { IHelpQuestion } from './IHelpQusetion';

export interface IHelpQuestionsCategory {
    id: number;
    title: string;
    questions: IHelpQuestion[];
}
