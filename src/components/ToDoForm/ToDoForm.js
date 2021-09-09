import React, { useState } from 'react';
import './ToDoForm.css';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button>Add</button>
    </form>
  );
};

export default ToDoForm;
