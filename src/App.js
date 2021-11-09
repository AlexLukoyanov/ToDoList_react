import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ToDoSearch from './components/ToDoSearch';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';
import TodoTabs from './components/ToDoTabs';
import { Empty } from './components/Empty';

function App() {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos));
  }, [todos]);

  const handleCheck = (id) => () => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleAddTask = (userInput) => {
    if (userInput) {
      const newTodo = {
        id: Math.random().toString(30).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleRemoveTask = (id) => () => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleDeleteDoneTasks = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const handleEditTodo = (editValue, id) => {
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
        if (activeTab === 'active') {
          return !todo.complete;
        } else if (activeTab === 'done') {
          return todo.complete;
        } else {
          return todo;
        }
      });
    }

    return result;
  };

  return (
    <div className={styles.wrapper}>
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
            onCheck={handleCheck}
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
