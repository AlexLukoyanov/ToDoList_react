import React, { useState, FC } from 'react';
import styles from './index.module.css';

type ToDoFormProps = {
  onAddTask: (userInput: string) => void;
};

const TodoForm: FC<ToDoFormProps> = ({ onAddTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onAddTask(userInput);
    setUserInput('');
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onAddTask(userInput);
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
