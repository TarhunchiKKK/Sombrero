import { createSlice } from '@reduxjs/toolkit';

export interface ILoaderState {
    isLoading: boolean;
}

const initialState: ILoaderState = {
    isLoading: true,
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        endLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const { startLoading, endLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
