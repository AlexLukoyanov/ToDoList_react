import React from 'react';

const ToDoFilterItem = ({ setQueryItems }) => {
  return (
    <div>
      <input
        onChange={(e) => setQueryItems(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};

export default ToDoFilterItem;
