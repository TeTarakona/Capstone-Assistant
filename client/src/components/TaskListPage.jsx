import Tasklist from "./TaskList";
import AddTask from "./AddTask";

import "./TaskListPage.css"

const TaskListPage = () => {
  return (
    <>
      <div className="pageContainer">
        <h1 className="heading">Task List</h1>
        <AddTask />
        <Tasklist />
      </div>
    </>
  );
};

export default TaskListPage;
