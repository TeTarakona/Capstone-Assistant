import Tasklist from "./TaskList";
import AddTask from "./AddTask";

const TaskListPage = () => {
return(
    <>
    <div className="pageContainer">
    <AddTask />
    <Tasklist />
    </div>
    </>
)
}

export default TaskListPage;