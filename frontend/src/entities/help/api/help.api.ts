import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../../../shared';
import { IHelpQuestionsCategory } from '../models/IHelpQuestionCategory';
import { IHelpQuestion } from '../models/IHelpQusetion';

export const helpApi = createApi({
    reducerPath: 'help/api',

    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/help`,
    }),

    tagTypes: ['HelpQuestion', 'HelpQuestionsCategory'],

    endpoints: (build) => ({
        getHelp: build.query<IHelpQuestionsCategory[], void>({
            query: () => ({
                url: '',
            }),
            providesTags: () => ['HelpQuestion', 'HelpQuestionsCategory'],
        }),
        getHelpQuestions: build.query<IHelpQuestion[], void>({
            query: () => ({
                url: '/questions',
            }),
            providesTags: ['HelpQuestion'],
        }),
        getOneHelpQuestion: build.query<IHelpQuestion, number>({
            query: (id: number) => ({
                url: `/questions/${id}`,
            }),
            providesTags: ['HelpQuestion'],
        }),
        createHelpQuestion: build.mutation<IHelpQuestion, Omit<IHelpQuestion, 'id'>>({
            query: (question: Omit<IHelpQuestion, 'id'>) => ({
                url: '/questions',
                method: 'POST',
                body: question,
            }),
            invalidatesTags: ['HelpQuestion', 'HelpQuestionsCategory'],
        }),
        updateHelpQuestion: build.mutation<void, IHelpQuestion>({
            query: (question: IHelpQuestion) => ({
                url: `questions/${question.id}`,
                method: 'PATCH',
                body: {
                    ...question,
                    id: undefined,
                },
            }),
            invalidatesTags: ['HelpQuestion', 'HelpQuestionsCategory'],
        }),
        removeHelpQuestion: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/questions/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['HelpQuestion', 'HelpQuestionsCategory'],
        }),
        getHelpQuestionsCategories: build.query<IHelpQuestionsCategory[], void>({
            query: () => ({
                url: '/categories',
            }),
            providesTags: ['HelpQuestionsCategory'],
        }),
        getOneHelpQuestionsCategory: build.query<IHelpQuestionsCategory, number>({
            query: (id: number) => ({
                url: `/categories/${id}`,
            }),
            providesTags: ['HelpQuestionsCategory'],
        }),
        createHelpQuestionsCategory: build.mutation<IHelpQuestionsCategory, Omit<IHelpQuestionsCategory, 'id'>>({
            query: (category: Omit<IHelpQuestionsCategory, 'id'>) => ({
                url: '/categories',
                method: 'POST',
                body: category,
            }),
            invalidatesTags: ['HelpQuestionsCategory'],
        }),
        updateHelpQuestionsCategory: build.mutation<void, IHelpQuestionsCategory>({
            query: (category: IHelpQuestionsCategory) => ({
                url: `categories/${category.id}`,
                method: 'PATCH',
                body: {
                    ...category,
                    id: undefined,
                },
            }),
            invalidatesTags: ['HelpQuestionsCategory'],
        }),
        removeHelpQuestionsCategory: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['HelpQuestionsCategory'],
        }),
    }),
});

export const {
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
} = helpApi;
