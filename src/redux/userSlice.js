import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

export const getAllTasks = createAsyncThunk(
    'users/tasks',
    async ({ company_id }, { rejectWithValue }) => {
        try {
            const response = await userService.getAllTasks(company_id);
            return response;
        } catch (err) {
            let error = err; // cast the error for access
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    tasks: {},
    error: null
};

const createApplicationSlice = createSlice({
    name: 'Application',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
            state.tasks = payload;
        });
        builder.addCase(getAllTasks.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error.message;
            }
        });
    }
});

const { reducer } = createApplicationSlice;

export default reducer;
