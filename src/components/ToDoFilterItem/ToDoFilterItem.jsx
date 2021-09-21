import React from 'react';

const ToDoFilterItem = ({ setQueryItems }) => {
  return (
    <div>
      <i class="fas fa-search"></i>
      <input
        onChange={(e) => setQueryItems(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};

export default ToDoFilterItem;
