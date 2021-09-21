import React, { useState } from 'react';
import styles from './App.module.css';
import ToDoFilterItem from './components/ToDoFilterItem/ToDoFilterItem';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoItem from './components/ToDoItem/ToDoItem';
import ToDoTabs from './components/ToDoTabs/ToDoTabs';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [queryItem, setQueryItems] = useState('');

  const handleCheck = (id) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : { ...item }
      )
    );
  };

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(30).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setToDoList([...toDoList, newItem]);
    }
  };

  const removeTask = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const deleteDoneTask = () => {
    setToDoList(toDoList.filter((item) => !item.complete));
  };

  const handleEditeList = (editValue, id) => {
    const newList = [...toDoList];
    newList.forEach((item) => {
      if (item.id === id) {
        item.task = editValue;
      }
    });
    setToDoList(newList);
  };

  const filterItems = () => {
    let result = [...toDoList];

    if (queryItem.length) {
      result = result.filter((item) =>
        item.task.toLowerCase().includes(queryItem.toLowerCase())
      );
    }
    if (activeTab) {
      result = result.filter((item) => {
        if (activeTab === 'active') {
          return !item.complete;
        } else if (activeTab === 'done') {
          return item.complete;
        } else {
          return item;
        }
      });
    }

    return result;
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <header>
          <h1 className={styles.title}> Todo List</h1>
        </header>

        <ToDoForm addTask={addTask} />
        <ToDoFilterItem setQueryItems={setQueryItems} />
        <ToDoTabs changeTab={setActiveTab} />
        {[
          filterItems().map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              removeTask={removeTask}
              handleCheck={handleCheck}
              handleEditeList={handleEditeList}
            />
          )),
        ]}
        <button onClick={deleteDoneTask}>Clear Done Task</button>
      </div>
    </div>
  );
}

export default App;
