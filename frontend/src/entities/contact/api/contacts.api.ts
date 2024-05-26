import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../../../shared';
import { IContact } from '../models/IContact';
import { HttpMethods, QueryTags } from '../../utils';

export const contactsApi = createApi({
    reducerPath: 'contacts/api',

    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
    }),

    tagTypes: [QueryTags.Contact],

    endpoints: (build) => ({
        getContacts: build.query<IContact[], void>({
            query: () => ({
                url: 'contacts',
            }),
            providesTags: [QueryTags.Contact],
        }),
        getOneContact: build.query<IContact, number>({
            query: (id: number) => ({
                url: `/contacts/${id}`,
            }),
            // providesTags: [QueryTags.Contact],
        }),
        createContact: build.mutation<IContact, IContact>({
            query: (contact: IContact) => ({
                url: '/contacts',
                method: HttpMethods.POST,
                body: contact,
            }),
            invalidatesTags: [QueryTags.Contact],
        }),
        updateContact: build.mutation<void, IContact>({
            query: (contact: IContact) => ({
                url: `/contacts/${contact.id}`,
                method: HttpMethods.PATCH,
                body: contact,
            }),
            invalidatesTags: [QueryTags.Contact],
        }),
        removeContact: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/contacts/${id}`,
                method: HttpMethods.DELETE,
            }),
            invalidatesTags: [QueryTags.Contact],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useGetOneContactQuery,
    useCreateContactMutation,
    useUpdateContactMutation,
    useRemoveContactMutation,
} = contactsApi;
