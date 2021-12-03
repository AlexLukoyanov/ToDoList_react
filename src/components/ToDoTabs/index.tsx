import React, { FC } from 'react';
import { FilterTab } from '../../types/stateType';
import styles from './index.module.css';

type ToDoTabsProps = {
  onChangeTab: (type: FilterTab) => void;
  activeTab: string;
};

const TodoTabs: FC<ToDoTabsProps> = ({ onChangeTab, activeTab }) => {
  const handleChangeTab = (type: FilterTab) => () => onChangeTab(type);

  return (
    <div className={styles.todo_tabs}>
      <button
        className={
          activeTab === FilterTab.all
            ? styles.todo_tab_active
            : styles.todo_tabs_item
        }
        onClick={handleChangeTab(FilterTab.all)}
      >
        All
      </button>
      <button
        className={
          activeTab === FilterTab.active
            ? styles.todo_tab_active
            : styles.todo_tabs_item
        }
        onClick={handleChangeTab(FilterTab.active)}
      >
        Active
      </button>
      <button
        className={
          activeTab === FilterTab.done
            ? styles.todo_tab_active
            : styles.todo_tabs_item
        }
        onClick={handleChangeTab(FilterTab.done)}
      >
        Done
      </button>
    </div>
  );
};

export default TodoTabs;
