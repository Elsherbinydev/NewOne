import React from "react";
import './Task.css';

const TaskDisc = ({description, status}) => {
  const statusColors = {
    'Not Started': 'red',
    'In Progress': 'orange',
    'finished': 'green',
  };

  return (
    <div className="task-disc" style={{backgroundColor: statusColors[status] || 'gray'}}>
      <p>{description}</p>
      <p>{status}</p> 
    </div>
  )
}

export default TaskDisc;
