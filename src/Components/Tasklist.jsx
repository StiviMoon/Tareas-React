import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../Context/TasksContext.jsx";

function Tasklist() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-4xl font-bold pt-4">No hay tareas aun!</h1>;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-4 ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Tasklist;
