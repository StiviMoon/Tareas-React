import "./App.css";
import { React } from "react";
import TaskList from "./Components/Tasklist";
import TaskForm from "./Components/TasksForm";

function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
