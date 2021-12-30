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
  const todos = useAppSelector((state) => state.todos);
  const todoSearch = useAppSelector((state) => state.todoSearch);
  const todoActiveTab = useAppSelector((state) => state.todoFilter);

  const filteredTodos = () => {
    let result = [...todos];

    if (todoSearch.length) {
      result = result.filter((todo) =>
        todo.task.toLowerCase().includes(todoSearch.toLowerCase())
      );
    }

    if (todoActiveTab) {
      result = result.filter((todo) => {
        if (todoActiveTab === FilterTab.active) {
          return !todo.complete;
        } else if (todoActiveTab === FilterTab.done) {
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

      <TodoForm />
      <ToDoSearch />
      <TodoTabs />

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
