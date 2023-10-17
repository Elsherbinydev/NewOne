import React from "react";

const TaskDisc = ({description,status}) =>{
const statusColors = {
    'Not Started' : 'red',
    'In Progress' : 'orange',
    'finished' : 'green',
};
return (

    <div style={{backgroundColor: statusColors[status]}}>
    <p>{description}</p>
    <p>{status}</p> 
    </div>
)

 }

 export default TaskDisc;
