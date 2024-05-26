import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../../../shared';
import { IHelpQuestionsCategory } from '../models/IHelpQuestionCategory';
import { IHelpQuestion } from '../models/IHelpQusetion';
import { AddQuestionToCategryDto } from '../models/IAddQuestionToCategoryDto';
import { HttpMethods, QueryTags } from '../../utils';

export const helpApi = createApi({
    reducerPath: 'help/api',

    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/help`,
    }),

    tagTypes: [QueryTags.HelpQuestion, QueryTags.HelpQuestionsCategory],

    endpoints: (build) => ({
        getHelp: build.query<IHelpQuestionsCategory[], void>({
            query: () => ({
                url: '',
            }),
            providesTags: () => [QueryTags.HelpQuestion, QueryTags.HelpQuestionsCategory],
        }),
        getHelpQuestions: build.query<IHelpQuestion[], void>({
            query: () => ({
                url: '/questions',
            }),
            providesTags: [QueryTags.HelpQuestion],
        }),
        getOneHelpQuestion: build.query<IHelpQuestion, number>({
            query: (id: number) => ({
                url: `/questions/${id}`,
            }),
            providesTags: [QueryTags.HelpQuestion],
        }),
        createHelpQuestion: build.mutation<IHelpQuestion, Omit<IHelpQuestion, 'id'>>({
            query: (question: Omit<IHelpQuestion, 'id'>) => ({
                url: '/questions',
                method: HttpMethods.POST,
                body: question,
            }),
            invalidatesTags: [QueryTags.HelpQuestion, QueryTags.HelpQuestionsCategory],
        }),
        updateHelpQuestion: build.mutation<void, IHelpQuestion>({
            query: (question: IHelpQuestion) => ({
                url: `questions/${question.id}`,
                method: HttpMethods.PATCH,
                body: {
                    ...question,
                    id: undefined,
                },
            }),
            invalidatesTags: [QueryTags.HelpQuestion, QueryTags.HelpQuestionsCategory],
        }),
        removeHelpQuestion: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/questions/${id}`,
                method: HttpMethods.DELETE,
            }),
            invalidatesTags: [QueryTags.HelpQuestion, QueryTags.HelpQuestionsCategory],
        }),
        getHelpQuestionsCategories: build.query<IHelpQuestionsCategory[], void>({
            query: () => ({
                url: '/categories',
            }),
            providesTags: [QueryTags.HelpQuestionsCategory],
        }),
        getOneHelpQuestionsCategory: build.query<IHelpQuestionsCategory, number>({
            query: (id: number) => ({
                url: `/categories/${id}`,
            }),
            providesTags: [QueryTags.HelpQuestionsCategory],
        }),
        createHelpQuestionsCategory: build.mutation<IHelpQuestionsCategory, Omit<IHelpQuestionsCategory, 'id'>>({
            query: (category: Omit<IHelpQuestionsCategory, 'id'>) => ({
                url: '/categories',
                method: HttpMethods.POST,
                body: category,
            }),
            invalidatesTags: [QueryTags.HelpQuestionsCategory],
        }),
        updateHelpQuestionsCategory: build.mutation<void, IHelpQuestionsCategory>({
            query: (category: IHelpQuestionsCategory) => ({
                url: `categories/${category.id}`,
                method: HttpMethods.PATCH,
                body: {
                    ...category,
                    id: undefined,
                },
            }),
            invalidatesTags: [QueryTags.HelpQuestionsCategory],
        }),
        removeHelpQuestionsCategory: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/categories/${id}`,
                method: HttpMethods.DELETE,
            }),
            invalidatesTags: [QueryTags.HelpQuestionsCategory],
        }),
        addQuestionToCategory: build.mutation<void, AddQuestionToCategryDto>({
            query: (dto: AddQuestionToCategryDto) => ({
                url: 'questions/add-to-category',
                method: HttpMethods.PATCH,
                body: dto,
            }),
            invalidatesTags: [QueryTags.HelpQuestion, QueryTags.HelpQuestionsCategory],
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
    useAddQuestionToCategoryMutation,
} = helpApi;
