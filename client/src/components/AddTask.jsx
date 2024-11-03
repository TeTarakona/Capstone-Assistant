import React, { useState } from "react";

const AddTask = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      console.log(description);
      const response = await fetch("http://localhost:5001/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        window.location.reload();
      }
      setDescription("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="taskInput">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" className="blueButton">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
