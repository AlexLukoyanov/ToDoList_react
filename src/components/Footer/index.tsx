import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './index.module.css';
import { useAppDispatch } from './../../hooks/redux';
import { deleteDoneTodo } from '../../store/todoSlice';

export const Footer: FC = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleDeleteDoneTasks = () => {
    dispatch(deleteDoneTodo());
  };
  return (
    <footer className={styles.footer_wrapper}>
      <p className={styles.todo_counter}>
        You have <span> {todos.length} </span> to do
      </p>
      <button
        className={styles.delete_all_todo}
        onClick={handleDeleteDoneTasks}
      >
        Clean up done
      </button>
    </footer>
  );
};
