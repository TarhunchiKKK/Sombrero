import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from '../../widgets/loader/lib/loaderSlice';
import userSlice from '../../entities/user/lib/userSlice';
import searchSlice from '../../entities/advertisement/lib/searchSlice';

export const store = configureStore({
    reducer: {
        loader: loaderSlice,
        user: userSlice,
        search: searchSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
