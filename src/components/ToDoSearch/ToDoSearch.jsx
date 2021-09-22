import React from 'react';
import styles from './ToDoSearch.module.css';

const ToDoFilterItem = ({ setQueryItems }) => {
  return (
    <div className={styles.todo_search}>
      <i className={'fas fa-search icon'}></i>
      <input
        className={styles.todo_search_input}
        onChange={(e) => setQueryItems(e.target.value)}
      />
    </div>
  );
};

export default ToDoFilterItem;
