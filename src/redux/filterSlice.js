import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterList(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterList } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
