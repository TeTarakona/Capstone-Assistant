import React, { useState } from "react";

const EditTask = ({ task }) => {
  const [description, setDescription] = useState(task.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5001/todo/${task.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        window.location.reload(); 
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const modalId = `id${task.todo_id}`;  ID

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${modalId}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={modalId} 
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        onClick={() => setDescription(task.description)} 
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Task</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setDescription(task.description)} 
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={updateDescription}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
