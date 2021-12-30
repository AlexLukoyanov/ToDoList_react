import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import todoFilterReducer from './todoFilterSlice';
import todoSearchReducer from './todoSearchSlice';
import todoDescriptionReducer from './todoDescriptionSlice';
import { loadState } from './../Utils/localStorage';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    todoFilter: todoFilterReducer,
    todoSearch: todoSearchReducer,
    todoDescription: todoDescriptionReducer,
  },
  preloadedState: loadState(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
