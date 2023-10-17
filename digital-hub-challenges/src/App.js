import React from 'react';
import { useState } from 'react';
import AddNewTask from './component/AddTask';
import TaskList from './component/TaskList';
import './App.css';

const App = () => {

  const [tasks,setTasks] = useState([])
  const addTask = (description, status) => {
    // Logic to add a new task
    const newTask = { description, status };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) =>
  {setTasks(tasks.filter((task)=>task.id !== id))}
  return (
    <div className="App">
      
    <AddNewTask  addTasks = {addTask} />
    <TaskList tasks= {tasks} deleteTask ={deleteTask} />
    </div>
  );
}

export default App;
