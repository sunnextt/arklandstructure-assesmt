import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsService from '../services/newsService';

// export const getAllTasks = createAsyncThunk(
//     'users/tasks',
//     async ({ id }, { rejectWithValue }) => {
//         try {
//             const response = await newsService.getAllTasks();
//             return response;
//         } catch (err) {
//             let error = err; // cast the error for access
//             if (!error.response) {
//                 throw err;
//             }
//             return rejectWithValue(error.response.data);
//         }
//     }
// );

const initialState = {
    news: {},
    error: null
};

const newsSlice = createSlice({
    name: 'Application',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
        //     state.news = payload;
        // });
        // builder.addCase(getAllTasks.rejected, (state, action) => {
        //     if (action.payload) {
        //         state.error = action.payload.errorMessage;
        //     } else {
        //         state.error = action.error.message;
        //     }
        // });
    }
});

const { reducer } = newsSlice;

export default reducer;
