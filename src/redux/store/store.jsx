import {configureStore} from '@reduxjs/toolkit';
import campYearReducer from '../campYearSlice';

export const store = configureStore({
  reducer: {
    campYear: campYearReducer,
  },
});
