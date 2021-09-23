import React, { useState } from 'react';
import styles from './index.module.css';

const TodoForm = ({ onAddTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(userInput);
    setUserInput('');
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
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
