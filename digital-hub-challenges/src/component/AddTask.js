import React from "react";
import './AddTask.css'
import { useState } from "react";

const AddNewTask = ({ addTasks }) => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("NoT-Started-Yet");

  const handleSubmission = (e) => {
    e.preventDefault(e);
    addTasks(description, status);
    setDescription("");
    setStatus("NoT-Started-Yet");
  };
  return (
    <form className="form" onSubmit={handleSubmission}>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Task-Description"
      />
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        
        <option value="Not Started"> NoT Started </option>
        <option value="In Progress"> On Progress </option>
        <option value="finished"> Finished </option>
      </select>

      <button type="submit"> Add-Task </button>
    </form>
  );
};

export default AddNewTask;
