import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDefaultUser } from '../models/IUser';
import { IUserInfo } from '../models/IUserInfo';

export interface IUserState {
    currentUser: IUserInfo | null;
}

const initialState: IUserState = {
    currentUser: getDefaultUser(),
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUserInfo>) => {
            state.currentUser = action.payload;
        },
        resetCurrentUser: (state) => {
            state.currentUser = null;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
