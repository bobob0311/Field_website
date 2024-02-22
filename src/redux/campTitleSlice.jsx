import {createSlice} from '@reduxjs/toolkit';

export const campTitleSlice = createSlice({
  name: 'campTitle',
  initialState: {
    value: '',
  },
  reducers: {
    setCampTitle: (state, action) => {
      Object.assign(state, {value: action.payload});
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCampTitle} = campTitleSlice.actions;

export default campTitleSlice.reducer;
