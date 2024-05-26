import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../../../shared';
import { IFaq } from '../models/IFaq';

export const faqsApi = createApi({
    reducerPath: 'faqs/api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/faqs`,
    }),
    tagTypes: ['Faq'],
    endpoints: (build) => ({
        getFaqs: build.query<IFaq[], void>({
            query: () => ({
                url: '',
            }),
            providesTags: ['Faq'],
        }),
        getOneFaq: build.query<IFaq, number>({
            query: (id: number) => ({
                url: `/${id}`,
            }),
            providesTags: ['Faq'],
        }),
        createFaq: build.mutation<IFaq, Omit<IFaq, 'id'>>({
            query: (faq: Omit<IFaq, 'id'>) => ({
                url: '',
                method: 'POST',
                body: { ...faq },
            }),
            invalidatesTags: ['Faq'],
        }),
        updateFaq: build.mutation<void, IFaq>({
            query: (faq: IFaq) => ({
                url: `/${faq.id}`,
                method: 'PATCH',
                body: { ...faq, id: undefined },
            }),
            invalidatesTags: ['Faq'],
        }),
        removeFaq: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Faq'],
        }),
    }),
});

export const { useGetFaqsQuery, useGetOneFaqQuery, useCreateFaqMutation, useUpdateFaqMutation, useRemoveFaqMutation } =
    faqsApi;
