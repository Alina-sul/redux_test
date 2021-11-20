import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
    reducer:{
        data: dataReducer,
        filter: filterReducer,
    },
});
