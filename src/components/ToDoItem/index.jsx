import React, { useState } from 'react';
import styles from './index.module.css';

const TodoItem = ({ item, onRemoveTask, onCheck, onEditList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.task);

  const handleChangeEditMode = () => {
    setIsEditing(true);
  };

  const handleSave = (id) => () => {
    setIsEditing(false);
    if (editValue) {
      onEditList(editValue, id);
    } else {
      setEditValue(item.task);
    }
  };

  const handleChangeTask = (e) => {
    setEditValue(e.target.value);
  };

  if (isEditing) {
    return (
      <div>
        <div className={styles.todo_item_wrapper}>
          <label htmlFor="editValue" />
          <input
            className={styles.todo_item_edit}
            type="text"
            id="editValue"
            value={editValue}
            onChange={handleChangeTask}
          />
          <button
            className={'fas fa-save'}
            onClick={handleSave(item.id)}
            title="Save"
          />
        </div>
      </div>
    );
  }
    return (
      <div className={styles.todo_item_wrapper}>
        <div className={styles.todo_item}>
          <input
            className={styles.todo_item_check}
            type="checkbox"
            id={item.id}
            checked={item.complete}
            onChange={onCheck(item.id)}
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
          onClick={handleChangeEditMode}
          title="Edit"
        />
        <button
          className={'fas fa-trash'}
          onClick={onRemoveTask(item.id)}
          title="Delete"
        />
      </div>
    );
};

export default TodoItem;
