import React from 'react';
import styles from './index.module.css';

const TodoFilterItem = ({ onChangeTodos }) => {
    const handleChange = (e) => onChangeTodos(e.target.value);

    return (
    <div className={styles.todo_search}>
      <i className={'fas fa-search icon'}/>
      <input
        className={styles.todo_search_input}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default TodoFilterItem;
