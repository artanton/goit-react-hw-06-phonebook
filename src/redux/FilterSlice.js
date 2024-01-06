import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    filter: '',
  },

  reducers: {
    filtering(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filtering } = filterSlice.actions;
