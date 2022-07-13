import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    news: {},
    error: null
};

const newsSlice = createSlice({
    name: 'Application',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {}
});

const { reducer } = newsSlice;

export default reducer;
