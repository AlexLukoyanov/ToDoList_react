import React from 'react';
import styles from './index.module.css';

const TodoTabs = ({ onChangeTab, activeTab }) => {
  const handleChangeTab = (type) => () => onChangeTab(type);

  return (
    <div className={styles.todo_tabs}>
      <button
        className={
          activeTab === 'all' ? styles.todo_tab_active : styles.todo_tabs_item
        }
        onClick={handleChangeTab('all')}
      >
        All
      </button>
      <button
        className={
          activeTab === 'active'
            ? styles.todo_tab_active
            : styles.todo_tabs_item
        }
        onClick={handleChangeTab('active')}
      >
        Active
      </button>
      <button
        className={
          activeTab === 'done' ? styles.todo_tab_active : styles.todo_tabs_item
        }
        onClick={handleChangeTab('done')}
      >
        Done
      </button>
    </div>
  );
};

export default TodoTabs;
