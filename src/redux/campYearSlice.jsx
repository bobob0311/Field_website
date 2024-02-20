import {createSlice} from '@reduxjs/toolkit';

export const campYearSlice = createSlice({
  name: 'campYear',
  initialState: {
    value: 2023,
  },
  reducers: {
    setDataCampYear: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setDataCampYear} = campYearSlice.actions;

export default campYearSlice.reducer;
