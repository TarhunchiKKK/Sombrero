import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ScreenSizes, SERVER_URL } from '../../../shared';
import { IStoredFile } from '../models/StoredFile';

export const storedFilesApi = createApi({
    reducerPath: 'storedfoles/api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/files`,
    }),
    endpoints: (build) => ({
        getHomeImages: build.query<IStoredFile[], ScreenSizes>({
            query: (screenSize: ScreenSizes) => ({
                url: `/home/${screenSize}`,
            }),
        }),
        getHomeImagesCount: build.query<number, void>({
            query: () => ({
                url: '/home/count',
            }),
        }),
    }),
});

export const { useGetHomeImagesQuery, useGetHomeImagesCountQuery } = storedFilesApi;
