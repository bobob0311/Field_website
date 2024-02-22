import {configureStore} from '@reduxjs/toolkit';
import campTitleReducer from '../campTitleSlice';
import monthTitleReducer from '../monthFieldSlice';

export const store = configureStore({
  reducer: {
    campTitle: campTitleReducer,
    monthTitle: monthTitleReducer, // 올바른 reducer를 사용
  },
});
