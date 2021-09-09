import React from 'react';

const ToDoTabs = ({ changeTabs }) => {
  return (
    <div>
      <button onClick={() => changeTabs}>Active</button>
      <button onClick={() => changeTabs}>Done</button>
      <button onClick={() => changeTabs}>All</button>
    </div>
  );
};

export default ToDoTabs;
