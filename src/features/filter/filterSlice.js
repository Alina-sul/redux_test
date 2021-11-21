import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
    filterByType: 'name',
    value: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterText(state){
            console.log(state.value);
        }
    },
});

export const { filterText } = filterSlice.actions;

export const selectFilter = createSelector((state) =>
    ({
        filterByType: state.filterSlice.filterByType,
        value: state.filterSlice.value,
    }), (state) => state);


export default filterSlice.reducer;



