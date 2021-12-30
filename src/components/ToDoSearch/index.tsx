import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTodoSearch } from '../../store/todoSearchSlice';
import styles from './index.module.css';

const TodoFilterItem: FC = () => {
  const todoSearch = useAppSelector((state) => state.todoSearch);
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setTodoSearch(e.target.value));
  };

  return (
    <div className={styles.todo_search}>
      <i className={'fas fa-search icon'} />
      <input
        className={styles.todo_search_input}
        onChange={handleChange}
        placeholder="Search..."
        value={todoSearch}
      />
    </div>
  );
};

export default TodoFilterItem;
