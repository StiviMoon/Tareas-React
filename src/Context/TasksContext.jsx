import { React, createContext, useState, useEffect } from "react";
import { Tasks as data } from "../Data/Tasks.js";

export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  function createTask(taskTitle, tasksDescription) {
    if (!taskTitle.trim() || !tasksDescription.trim()) {
      alert("No puedes agregar una tarea vacía");
    } else {
      setTasks([
        ...tasks,
        {
          title: taskTitle,
          id: tasks.length,
          description: tasksDescription,
        },
      ]);
    }
  }

  function deleteTask(tasksId) {
    console.log(tasksId);
    setTasks(tasks.filter((tasks) => tasks.id !== tasksId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
