import { React, useContext, useState } from "react";
import { TaskContext } from "../Context/TasksContext.jsx";

const TasksForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-2xl"
      >
        <h1 className="text-2xl mb-3 font-bold">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 text-black"
        />
        <textarea
          type="text"
          placeholder="Escribe la descripcion..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 text-black"
        />
        <button className="bg-green-500 p-2 rounded-md font-bold text-white">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TasksForm;
