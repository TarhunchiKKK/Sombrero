import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../../../shared';
import { IContact } from '../models/IContact';

export const contactsApi = createApi({
    reducerPath: 'contacts/api',

    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
    }),

    tagTypes: ['Contact'],

    endpoints: (build) => ({
        getContacts: build.query<IContact[], void>({
            query: () => ({
                url: 'contacts',
            }),
            providesTags: ['Contact'],
        }),
        getOneContact: build.query<IContact, number>({
            query: (id: number) => ({
                url: `/contacts/${id}`,
            }),
            // providesTags: ['Contact'],
        }),
        createContact: build.mutation<IContact, IContact>({
            query: (contact: IContact) => ({
                url: '/contacts',
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        updateContact: build.mutation<void, IContact>({
            query: (contact: IContact) => ({
                url: `/contacts/${contact.id}`,
                method: 'PATCH',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        removeContact: build.mutation<void, number>({
            query: (id: number) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
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
