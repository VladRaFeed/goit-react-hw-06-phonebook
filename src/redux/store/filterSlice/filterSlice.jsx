import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setStatusFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
