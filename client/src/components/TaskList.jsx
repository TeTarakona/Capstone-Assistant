import React, { useEffect, useState } from "react";

import EditTask from "./EditTask";

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
    try {
      const deleteTask = await fetch(`http://localhost:5001/todo/${id}`, {
        method: "DELETE",
      });
      if (deleteTask.ok) {
        window.location.reload(); 
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5001/todo");
      const rawList = await response.json();

      setTasks(rawList);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.todo_id}>
              <td>{task.description}</td>
              <td>
                <EditTask task={task} />
              </td>
              <td>
                <button onClick={() => deleteTask(task.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tasklist;
