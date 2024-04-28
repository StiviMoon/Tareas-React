import { useContext } from "react";
import { TaskContext } from "../Context/TasksContext.jsx";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white rounded-xl">
      <h1 className="text-xl font-bold capitalize m-4"> {task.title} </h1>
      <p className="text-sm text-white m-4"> {task.description} </p>
      <button
        className="bg-red-500 rounded-lg p-2 m-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default TaskCard;
