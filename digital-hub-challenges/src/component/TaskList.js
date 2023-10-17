import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task ,id) => (
        <Task key={id} {...task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
