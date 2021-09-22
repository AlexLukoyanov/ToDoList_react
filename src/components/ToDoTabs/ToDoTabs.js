import React from 'react';
import styles from './ToDoTabs.module.css';

const ToDoTabs = ({ changeTab, activeTab }) => {
  return (
    <ul className={styles.todo_tabs}>
      <li
        className={
          activeTab === 'all' ? styles.todo_tab_active : styles.todo_tabs_item
        }
        onClick={() => changeTab('all')}
      >
        All
      </li>
      <li
        className={
          activeTab === 'active'
            ? styles.todo_tab_active
            : styles.todo_tabs_item
        }
        onClick={() => changeTab('active')}
      >
        Active
      </li>
      <li
        className={
          activeTab === 'done' ? styles.todo_tab_active : styles.todo_tabs_item
        }
        onClick={() => changeTab('done')}
      >
        Done
      </li>
    </ul>
  );
};

export default ToDoTabs;
