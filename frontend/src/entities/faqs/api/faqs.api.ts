import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../../../shared';
import { IFaq } from '../models/IFaq';
import { HttpMethods, QueryTags } from '../../utils';

export const faqsApi = createApi({
    reducerPath: 'faqs/api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/faqs`,
    }),
    tagTypes: [QueryTags.Faqs],
    endpoints: (build) => ({
        getFaqs: build.query<IFaq[], void>({
            query: () => ({
                url: '',
            }),
            providesTags: [QueryTags.Faqs],
        }),
        getOneFaq: build.query<IFaq, number>({
            query: (id: number) => ({
                url: `/${id}`,
            }),
            providesTags: [QueryTags.Faqs],
        }),
        createFaq: build.mutation<IFaq, Omit<IFaq, 'id'>>({
            query: (faq: Omit<IFaq, 'id'>) => ({
                url: '',
                method: HttpMethods.POST,
                body: { ...faq },
            }),
            invalidatesTags: [QueryTags.Faqs],
        }),
        updateFaq: build.mutation<void, IFaq>({
            query: (faq: IFaq) => ({
                url: `/${faq.id}`,
                method: HttpMethods.PATCH,
                body: { ...faq, id: undefined },
            }),
            invalidatesTags: [QueryTags.Faqs],
        }),
        removeFaq: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/${id}`,
                method: HttpMethods.DELETE,
            }),
            invalidatesTags: [QueryTags.Faqs],
        }),
    }),
});

export const { useGetFaqsQuery, useGetOneFaqQuery, useCreateFaqMutation, useUpdateFaqMutation, useRemoveFaqMutation } =
    faqsApi;
