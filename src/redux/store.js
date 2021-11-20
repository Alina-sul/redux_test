import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../features/data/dataSlice';
//import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
    reducer: {
        dataSlice: dataSlice.reducer,
        //filter: filterReducer,
    },
});

