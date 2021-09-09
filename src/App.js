import React, { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoItem from './components/ToDoItem/ToDoItem';
import ToDoTabs from './components/ToDoTabs/ToDoTabs';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isChecked, setisChecked] = useState([]);
  const [activeTabs, setActiveTabs] = useState('');

  const handleCheck = (id) => () => {
    const alreadyHave = isChecked.includes(id);
    if (alreadyHave) {
      setisChecked(isChecked.filter((item) => item !== id));
    } else {
      setisChecked([...isChecked, id]);
    }
  };

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(30).substr(2, 9),
        task: userInput,
        type: '',
      };
      setToDoList([...toDoList, newItem]);
    }
  };

  const removeTask = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const deleteDoneTask = () => {
    let result = [...toDoList];
    while (isChecked.length !== 0) {
      result = result.filter((item) => item.id !== isChecked[0]);
      isChecked.shift();
    }

    setToDoList(result);
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

  const changeTabs = () => {
    for (let i = 0; i < toDoList.length; i++) {
      for (let j = 0; j < isChecked.length; i++) {
        if (toDoList[i].id === isChecked[j]) {
          toDoList[i].type = 'done';
          setActiveTabs('done');
        }
        if (toDoList[i]) {
          toDoList[i].type = 'active';
          setActiveTabs('active');
        }
        if (toDoList[i] && toDoList[i].id === isChecked[j]) {
          toDoList[i].type = 'all';
          setActiveTabs('all');
        }
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1> ToDo List</h1>
      </header>
      <ToDoForm addTask={addTask} />
      <ToDoTabs changeTabs={changeTabs} />
      {[
        toDoList.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            removeTask={removeTask}
            handleCheck={handleCheck}
            isChecked={isChecked.includes(item.id)}
            handleEditeList={handleEditeList}
          />
        )),
      ]}
      <button onClick={deleteDoneTask}>Clear Done Task</button>
    </div>
  );
}

export default App;
