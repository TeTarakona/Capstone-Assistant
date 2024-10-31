import React, { useEffect, useState } from "react";

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
    try {
        const deleteTask = await fetch(`http://localhost:5001/todo/${id}`, {
            method: "DELETE"
        })
        setTasks(tasks.filter(task => task.todo_id !== id))
    } catch (error) {
        console.error(error.message)
    }
}

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
              <td>Edit</td>
              <button onClick={() => deleteTask(task.todo_id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tasklist;
