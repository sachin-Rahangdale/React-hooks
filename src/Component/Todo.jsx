import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const add = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const markDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <br /><br />

      <button onClick={add}>Add Task</button>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((t, i) => (
            <tr key={i}>
              <td
                style={{
                  textDecoration: t.done ? "line-through" : "none",
                }}
              >
                {t.text}
              </td>
              <td>
                <button onClick={() => markDone(i)}>
                  {t.done ? "Undo" : "Done"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
