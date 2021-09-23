import React, { useState } from 'react';
import styles from './ToDoItem.module.css';

const ToDoItem = ({ item, removeTask, handleCheck, handleEditeList }) => {
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
        <div className={styles.todo_item_wrapper}>
          <label htmlFor="editValue" />
          <input
            className={styles.todo_item_edit}
            type="text"
            id="editValue"
            task="editValue"
            value={editValue}
            onChange={changeTask}
          />
          <button
            className={'fas fa-save'}
            onClick={() => handleSave(item.id)}
            title="Save"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.todo_item_wrapper}>
        <div className={styles.todo_item}>
          <input
            className={styles.todo_item_check}
            type="checkbox"
            id={item.id}
            checked={item.complete}
            onChange={() => handleCheck(item.id)}
          />
          <label
            htmlFor={item.id}
            className={item.complete ? styles.lineThrough : null}
          >
            {item.task}
          </label>
        </div>
        <button
          disabled={item.complete}
          className={'fas fa-pencil-alt'}
          onClick={handleOnEdit}
          title="Edit"
        />
        <button
          className={'fas fa-trash'}
          onClick={deleteTask}
          title="Delete"
        />
      </div>
    );
  }
};

export default ToDoItem;
