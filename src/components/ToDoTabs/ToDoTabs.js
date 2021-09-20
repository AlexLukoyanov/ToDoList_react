import React from 'react';

const ToDoTabs = ({ changeTab }) => {
  return (
    <div>
      <button onClick={() => changeTab('active')}>Active</button>
      <button onClick={() => changeTab('done')}>Done</button>
      <button onClick={() => changeTab('all')}>All</button>
    </div>
  );
};

export default ToDoTabs;
