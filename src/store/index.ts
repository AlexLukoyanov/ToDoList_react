import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { loadState } from './../Utils/localStorage';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: loadState(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
