import { useState } from 'react';
import styles from './App.module.css';
import ToDoSearch from './components/ToDoSearch';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';
import TodoTabs from './components/ToDoTabs';
import { Empty } from './components/Empty';
import { FilterTab } from './types/stateType';
import { useAppSelector } from './hooks/redux';
import { Footer } from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<FilterTab>(FilterTab.all);
  const [searchQuery, setSearchQuery] = useState('');
  const todos = useAppSelector((state) => state.todos);

  const filteredTodos = () => {
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
    <div className={todos ? styles.wrapper_top : styles.wrapper}>
      <header>
        <h1 className={styles.title}>
          Todo <span> List </span>
        </h1>
      </header>

      <TodoForm />
      <ToDoSearch onChangeTodos={setSearchQuery} />
      <TodoTabs activeTab={activeTab} onChangeTab={setActiveTab} />

      {todos.length ? (
        filteredTodos().map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <Empty />
      )}

      {todos.length ? <Footer /> : null}
    </div>
  );
}

export default App;
