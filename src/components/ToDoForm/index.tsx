import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { addTodo } from '../../store/todoSlice';
import styles from './index.module.css';

const TodoForm: FC = () => {
  const [userInput, setUserInput] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (userInput) {
      dispatch(addTodo(userInput));
      setUserInput('');
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTodo(userInput));
      setUserInput('');
    }
  };

  return (
    <form className={styles.todo_form} onSubmit={handleSubmit}>
      <input
        className={styles.todo_form_input}
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add new todo..."
      />
      <button className={styles.todo_form_button}>Add</button>
    </form>
  );
};

export default TodoForm;
