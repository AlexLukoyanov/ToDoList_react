import { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setActiveFilter } from '../../store/todoFilterSlice';
import { FilterTab } from '../../types/stateType';
import styles from './index.module.css';

type TabButtonProps = {
  activeTab: FilterTab;
  text: FilterTab;
};

const TabButton: FC<TabButtonProps> = ({ activeTab, text }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={
        activeTab === text ? styles.todo_tab_active : styles.todo_tabs_item
      }
      onClick={() => dispatch(setActiveFilter(text))}
    >
      {text}
    </button>
  );
};

export default TabButton;
