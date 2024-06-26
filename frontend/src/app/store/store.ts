import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../../entities/user/lib/userSlice';
import searchSlice from '../../entities/advertisement/lib/searchSlice';
import registrationSlice from '../../entities/user/lib/registrationSlice';
import { contactsApi } from '../../entities/contact';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { faqsApi } from '../../entities/faqs';
import { helpApi } from '../../entities/help';
import { storedFilesApi } from '../../entities/home';

export const store = configureStore({
    reducer: {
        user: userSlice,
        search: searchSlice,
        registration: registrationSlice,

        [contactsApi.reducerPath]: contactsApi.reducer,
        [faqsApi.reducerPath]: faqsApi.reducer,
        [helpApi.reducerPath]: helpApi.reducer,
        [storedFilesApi.reducerPath]: storedFilesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(contactsApi.middleware)
            .concat(faqsApi.middleware)
            .concat(helpApi.middleware)
            .concat(storedFilesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
