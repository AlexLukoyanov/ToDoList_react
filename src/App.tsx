import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ToDoSearch from './components/ToDoSearch';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';
import TodoTabs from './components/ToDoTabs';
import { Empty } from './components/Empty';
import { Todo, FilterTab } from './types/stateType';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTab, setActiveTab] = useState<FilterTab>(FilterTab.all);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore') || '{}');
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos));
  }, [todos]);

  const handleCheck = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleAddTask = (userInput: string): void => {
    if (userInput) {
      const newTodo = {
        id: Date.now().toString(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleRemoveTask = (id: string): void => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleDeleteDoneTasks = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const handleEditTodo = (editValue: string, id: string): void => {
    const newTodos = [...todos];
    newTodos.forEach((item) => {
      if (item.id === id) {
        item.task = editValue;
      }
    });
    setTodos(newTodos);
  };

  const filteredItems = () => {
    let result = [...todos];

    if (searchQuery.length) {
      result = result.filter((todo) =>
        todo.task.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (activeTab) {
      result = result.filter((todo) => {
        if (activeTab === FilterTab.active) {
          return !todo.complete;
        } else if (activeTab === FilterTab.done) {
          return todo.complete;
        } else {
          return todo;
        }
      });
    }

    return result;
  };

  return (
    <div className={todos.length ? styles.wrapper_top : styles.wrapper}>
      <header>
        <h1 className={styles.title}>
          Todo <span> List </span>
        </h1>
      </header>
      <TodoForm onAddTask={handleAddTask} />
      <ToDoSearch onChangeTodos={setSearchQuery} />
      <TodoTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      {todos.length === 0 ? (
        <Empty />
      ) : (
        filteredItems().map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onRemoveTask={handleRemoveTask}
            handleCheck={handleCheck}
            onEditList={handleEditTodo}
          />
        ))
      )}
      {todos.length ? (
        <footer className={styles.footer_wrapper}>
          <p className={styles.todo_counter}>
            You have <span> {todos.length} </span> to do
          </p>
          <button
            className={styles.delete_all_todo}
            onClick={handleDeleteDoneTasks}
          >
            Clean up done
          </button>
        </footer>
      ) : null}
    </div>
  );
}

export default App;
