import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Todo } from '../types/stateType';

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: nanoid(),
        task: action.payload,
        complete: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      return state.map((todo) =>
        todo.id !== action.payload
          ? todo
          : { ...todo, complete: !todo.complete }
      );
    },
    editTodo: (
      state,
      action: PayloadAction<{ editValue: string; id: string }>
    ) => {
      state.forEach((todo) =>
        todo.id === action.payload.id
          ? (todo.task = action.payload.editValue)
          : todo
      );
    },
    deleteDoneTodo: (state) => {
      return state.filter((todo) => !todo.complete);
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, editTodo, deleteDoneTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
