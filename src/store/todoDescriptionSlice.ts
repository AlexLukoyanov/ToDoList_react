import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const todoDescriptionSlice = createSlice({
  name: 'todoDescription',
  initialState: '',
  reducers: {
    setTodoDescription: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setTodoDescription } = todoDescriptionSlice.actions;
export default todoDescriptionSlice.reducer;
