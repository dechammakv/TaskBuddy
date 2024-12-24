import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, category, completed: false });
    //reset state
    setPriority("Medium");
    setCategory("General");
    setTask("");
  };

  return (
    <form action="" className="task-form" onSubmit={handlesubmit}>
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
          <option value="medium">Medium</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personel">Personel</option>
        </select>
      </div>
    </form>
  );
}
