import React, { useState, FC } from 'react';
import styles from './index.module.css';
import { Todo } from '../../types/stateType';

type ToDoItemProps = {
  item: Todo;
  onRemoveTask: (id: string) => void;
  handleCheck: (id: string) => void;
  onEditList: (editValue: string, id: string) => void;
};

const TodoItem: FC<ToDoItemProps> = ({
  item,
  onRemoveTask,
  handleCheck,
  onEditList,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.task);

  const handleChangeEditMode = () => {
    setIsEditing(true);
  };

  const handleSave = (id: string) => () => {
    setIsEditing(false);
    if (editValue) {
      onEditList(editValue, id);
    } else {
      setEditValue(item.task);
    }
  };

  const handleChangeTask: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
          onChange={() => handleCheck(item.id)}
        />
        <label
          htmlFor={item.id}
          className={item.complete ? styles.lineThrough : undefined}
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
        onClick={() => onRemoveTask(item.id)}
        title="Delete"
      />
    </div>
  );
};

export default TodoItem;
