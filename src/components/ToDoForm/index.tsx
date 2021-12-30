import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTodoDescription } from '../../store/todoDescriptionSlice';
import { addTodo } from '../../store/todoSlice';
import styles from './index.module.css';

const TodoForm: FC = () => {
  const todoInput = useAppSelector((state) => state.todoDescription);
  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (todoInput) {
      dispatch(addTodo(todoInput));
      dispatch(setTodoDescription(''));
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setTodoDescription(e.target.value));
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTodo(todoInput));
      dispatch(setTodoDescription(''));
    }
  };

  return (
    <form className={styles.todo_form} onSubmit={handleSubmit}>
      <input
        className={styles.todo_form_input}
        type="text"
        value={todoInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add new todo..."
      />
      <button className={styles.todo_form_button}>Add</button>
    </form>
  );
};

export default TodoForm;
