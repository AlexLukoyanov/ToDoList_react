import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const todoSearchSlice = createSlice({
  name: 'todoSearch',
  initialState: '',
  reducers: {
    setTodoSearch: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setTodoSearch } = todoSearchSlice.actions;

export default todoSearchSlice.reducer;
