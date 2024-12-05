import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialState.filters,
  reducers: {
    setStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const getNameFilter = state => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
