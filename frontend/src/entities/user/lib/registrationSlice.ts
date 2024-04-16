import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IRegistrationState {
    email: string;
    password: string;
}

const initialState: IRegistrationState = {
    email: '',
    password: '',
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationData: (state, action: PayloadAction<IRegistrationState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
});

export const { setRegistrationData } = registrationSlice.actions;
export default registrationSlice.reducer;
