export type { IHelpQuestion } from './models/IHelpQusetion.ts';
export type { IHelpQuestionsCategory } from './models/IHelpQuestionCategory.ts';
export {
    useGetHelpQuery,
    useGetHelpQuestionsQuery,
    useGetOneHelpQuestionQuery,
    useCreateHelpQuestionMutation,
    useUpdateHelpQuestionMutation,
    useRemoveHelpQuestionMutation,
    useGetHelpQuestionsCategoriesQuery,
    useGetOneHelpQuestionsCategoryQuery,
    useCreateHelpQuestionsCategoryMutation,
    useUpdateHelpQuestionsCategoryMutation,
    useRemoveHelpQuestionsCategoryMutation,
    useAddQuestionToCategoryMutation,
    helpApi,
} from './api/help.api';

export { getFaqs } from './api/GetFaqs.ts';
export { getHelpQuestions } from './api/GetHelpQuestions.ts';
