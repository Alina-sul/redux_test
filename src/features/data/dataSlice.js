import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    status: 'idle',
};

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`);
        return response.data;
     },
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        extraReducers: (builder) => {
            builder
                .addCase(fetchData.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(fetchData.fulfilled, (state, action) => {
                    state.status = 'idle';
                    state.data = action.payload;
                });
        },
    }
});

export default dataSlice.reducer;

