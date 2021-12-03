import React, { FC } from 'react';
import styles from './index.module.css';

type ToDoSearchProps = {
  onChangeTodos: (e: string) => void;
};

const TodoFilterItem: FC<ToDoSearchProps> = ({ onChangeTodos }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    onChangeTodos(e.target.value);

  return (
    <div className={styles.todo_search}>
      <i className={'fas fa-search icon'} />
      <input
        className={styles.todo_search_input}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default TodoFilterItem;
