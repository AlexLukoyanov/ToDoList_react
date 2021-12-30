import React, { useState, FC } from 'react';
import styles from './index.module.css';
import { Todo } from '../../types/stateType';
import { useAppDispatch } from '../../hooks/redux';
import { editTodo, removeTodo, toggleComplete } from '../../store/todoSlice';

type ToDoItemProps = {
  todo: Todo;
};

const TodoItem: FC<ToDoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.task);

  const dispatch = useAppDispatch();

  const onRemoveTodo = (id: string) => () => dispatch(removeTodo(id));

  const handleCheck = (id: string) => () => dispatch(toggleComplete(id));

  const handleChangeEditMode = () => {
    setIsEditing(true);
  };

  const handleSave = (id: string) => () => {
    setIsEditing(false);
    if (editValue) {
      dispatch(editTodo({ editValue, id }));
    } else {
      setEditValue(todo.task);
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
            onClick={handleSave(todo.id)}
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
          id={todo.id}
          checked={todo.complete}
          onChange={handleCheck(todo.id)}
        />
        <label
          htmlFor={todo.id}
          className={todo.complete ? styles.lineThrough : undefined}
        >
          {todo.task}
        </label>
      </div>
      <button
        disabled={todo.complete}
        className={'fas fa-pencil-alt'}
        onClick={handleChangeEditMode}
        title="Edit"
      />
      <button
        className={'fas fa-trash'}
        onClick={onRemoveTodo(todo.id)}
        title="Delete"
      />
    </div>
  );
};

export default TodoItem;
