import { createSlice } from '@reduxjs/toolkit';

const filteredSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, { payload }) => {
      return payload;
    },
  },
  selectors: {
    selectFilter: state => state,
  },
});

export const filteredReducer = filteredSlice.reducer;
export const { changeFilter } = filteredSlice.actions;
export const { selectFilter } = filteredSlice.selectors;
