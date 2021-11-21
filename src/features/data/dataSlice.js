import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    pokemonList: [],
    status: 'idle',
    error: ""
};

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (_, thunkAPI) => {

        return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=99&offset=0`)//get pokemon list
            .then((res) => {
                const promises =  res.data.results.map(obj => {
                    return axios.get(`${obj.url}`)// get pokemon object
                        .then((res) => {
                            return {
                                id: res.data.id,
                                name: res.data.name,
                                image: res.data.sprites.front_default,
                                base_experience: res.data.base_experience,
                                types: res.data.types
                            };
                        })
                        .catch((err) => {
                            return thunkAPI.rejectWithValue({ error: err.message });
                        }) ;
                });
                return Promise.all(promises);
        }).catch((err) => {
            return thunkAPI.rejectWithValue({ error: err.message });
        });

     },
);


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.pending, (state) => {
            state.pokemonList = [];
            state.status = "loading";
        });
        builder.addCase(
            fetchPokemon.fulfilled, (state, { payload }) => {

                state.pokemonList = payload;
                console.log('state.pokemon',state.pokemonList);

                state.status = "loaded";
            });
        builder.addCase(
            fetchPokemon.rejected,(state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    }
});


export const selectPokemon = createSelector((state) =>
    ({
        pokemonList: state.dataSlice.pokemonList,
        status: state.dataSlice.status,

}), (state) => state);



export default dataSlice.reducer;



