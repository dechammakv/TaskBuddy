import React, { useState } from "react";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");
  return (
    <form action="" className="task-form">
      <div id="inp">
        <input
          type="text"
          placeholder="Enter Your Task"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button>Add Task</button>
        </span>
      </div>

      <div className="btns">
        <select
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Medium</option>
          <option value="">Low</option>
          <option value="">High</option>
        </select>
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">General</option>
          <option value="">Work</option>
          <option value="">Personel</option>
        </select>
      </div>
      <h1>{task}</h1>
    </form>
  );
}
