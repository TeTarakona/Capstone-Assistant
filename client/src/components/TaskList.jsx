import React, { useEffect, useState } from "react";

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);

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
        {tasks.map(task => (
            <tr key={task.id}>
                <td>{task.description}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

export default Tasklist;
