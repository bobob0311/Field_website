import {configureStore} from '@reduxjs/toolkit';
import modalTitleReducer from '../modalTitleSlice';

export const store = configureStore({
  reducer: {
    modalTitle: modalTitleReducer,
  },
});
