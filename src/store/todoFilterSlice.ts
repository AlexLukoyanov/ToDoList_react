import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterTab } from '../types/stateType';

const initialState = FilterTab.all;

const todoFilterSlice = createSlice({
  name: 'todosFilters',
  initialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<FilterTab>) => {
      return action.payload;
    },
  },
});

export const { setActiveFilter } = todoFilterSlice.actions;

export default todoFilterSlice.reducer;
