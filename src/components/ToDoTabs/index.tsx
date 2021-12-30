import { FC } from 'react';
import { FilterTab } from '../../types/stateType';
import styles from './index.module.css';
import { useAppSelector } from './../../hooks/redux';
import TabButton from '../../UI/TabButton';

const TodoTabs: FC = () => {
  const todoActiveTab = useAppSelector((state) => state.todoFilter);

  return (
    <div className={styles.todo_tabs}>
      <TabButton activeTab={todoActiveTab} text={FilterTab.all} />
      <TabButton activeTab={todoActiveTab} text={FilterTab.active} />
      <TabButton activeTab={todoActiveTab} text={FilterTab.done} />
    </div>
  );
};
export default TodoTabs;
