import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../features/data/dataSlice';
import filterSlice from '../features/filter/filterSlice';

export const store = configureStore({
    reducer: {
        dataSlice: dataSlice,
        filterSlice: filterSlice,
    },
});

