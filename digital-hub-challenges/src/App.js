import React from 'react';
import { useState } from 'react';
import AddNewTask from './component/AddTask';
import TaskList from './component/TaskList';
import './App.css';

const App = () => {

  const [tasks,setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks,task])
  }
  const deleteTask = (id) =>
  {setTasks(tasks.filter((task)=>task.id !== id))}
  return (
    <div className="App">
      
    <AddNewTask addTask = {addTask} />
    <TaskList tasks= {tasks} deleteTask ={deleteTask} />
    </div>
  );
}

export default App;
