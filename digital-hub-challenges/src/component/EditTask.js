import React from "react";
import { useState } from "react";

const EditTask = ({ task, updateTasks }) => {
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  // Handle Submit using preventDefault method
  const handleSubmission = (e) => {
    e.preventDefault(e);
    updateTasks(task.id, description, status);
  };

  return (
    <form  onSubmit={handleSubmission}>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
  
        <option value="Not Started"> NoT Started </option>
        <option value="In Progress"> On Progress </option>
        <option value="finished"> Finished </option>
      </select>

      <button type="submit"> Update-Task </button>
    </form>
  );
};

export default EditTask;
