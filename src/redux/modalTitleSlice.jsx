import {createSlice} from '@reduxjs/toolkit';

export const modalTitleSlice = createSlice({
  name: 'modalTitle',
  initialState: {
    value: '',
  },
  reducers: {
    setModalTitle: (state, action) => {
      Object.assign(state, {value: action.payload});
    },
  },
});

// Action creators are generated for each case reducer function
export const {setModalTitle} = modalTitleSlice.actions;

export default modalTitleSlice.reducer;
