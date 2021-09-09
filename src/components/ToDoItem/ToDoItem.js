import React, { useState } from 'react';
import './ToDoItem.css';

const ToDoItem = ({
  item,
  removeTask,
  handleCheck,
  isChecked,
  handleEditeList,
}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(item.task);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditeList(editValue, id);
    } else {
      setEditValue(item.task);
    }
  };

  const changeTask = (e) => {
    setEditValue(e.target.value);
  };

  const deleteTask = () => removeTask(item.id);

  if (onEdit) {
    return (
      <div>
        <div>
          <input
            type="text"
            id="editValue"
            task="editValue"
            value={editValue}
            onChange={changeTask}
          />
          <button onClick={() => handleSave(item.id)}>Save</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            id={item.id}
            checked={isChecked}
            onChange={handleCheck(item.id)}
          />
          <label htmlFor={item.id} className={isChecked ? 'lineThrough' : null}>
            {item.task}
          </label>
          <button onClick={deleteTask}>X</button>
          <button disabled={isChecked} onClick={handleOnEdit}>
            Edit
          </button>
        </div>
      </div>
    );
  }
};

export default ToDoItem;
