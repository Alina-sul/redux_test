import { createSlice,createSelector,PayloadAction,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    pokemon: [],
    status: 'idle',
    error: ""
};

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`);
            return await response.json();

        } catch(error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
     },
);

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.pending, (state) => {
            state.pokemon = [];
            state.status = "loading";
        });
        builder.addCase(
            fetchPokemon.fulfilled, (state, { payload }) => {
                state.pokemon = payload;
                state.status = "loaded";
            });
        builder.addCase(
            fetchPokemon.rejected,(state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    }
});

export const selectPokemon = createSelector((state) => ({
    pokemon: state.pokemon,
    status: state.status,
}), (state) => state);


export default dataSlice;
