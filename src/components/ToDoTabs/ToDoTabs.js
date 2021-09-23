import React from 'react';
import styles from './ToDoTabs.module.css';

const ToDoTabs = ({ changeTab, activeTab }) => {
  return (
    <div className={styles.todo_tabs}>
      <button
        className={
          activeTab === 'all' ? styles.todo_tab_active : styles.todo_tabs_item
        }
        onClick={() => changeTab('all')}
      >
        All
      </button>
      <button
        className={
          activeTab === 'active'
            ? styles.todo_tab_active
            : styles.todo_tabs_item
        }
        onClick={() => changeTab('active')}
      >
        Active
      </button>
      <button
        className={
          activeTab === 'done' ? styles.todo_tab_active : styles.todo_tabs_item
        }
        onClick={() => changeTab('done')}
      >
        Done
      </button>
    </div>
  );
};

export default ToDoTabs;
