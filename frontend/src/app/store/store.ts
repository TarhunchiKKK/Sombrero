import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from '../../widgets/loader/lib/loaderSlice';
import userSlice from '../../entities/user/lib/userSlice';
import registrationSlice from '../../entities/user/lib/registrationSlice';

export const store = configureStore({
    reducer: {
        loader: loaderSlice,
        user: userSlice,
        registration: registrationSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
