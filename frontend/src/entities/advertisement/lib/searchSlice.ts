import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchState {
    categoryId: number | null;
    title: string;
}

const initialState: ISearchState = {
    categoryId: null,
    title: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setSearchCategory: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        resetSearchCategory: (state) => {
            state.categoryId = null;
        },
    },
});

export const { setSearchTitle, setSearchCategory, resetSearchCategory } = searchSlice.actions;
export default searchSlice.reducer;
