import { useState } from "react";
import { Header, Input, Task } from "./components";
import { TaskContainer } from "./components/TaskContainer";
import "./global.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleAddNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = event.currentTarget["new-task"].value;
    setTasks([...tasks, { name: newTask }]);
  };
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form action="" onSubmit={handleAddNewTask}>
          <div>
            <Input
              type="text"
              name="new-task"
              placeholder="Adicione uma nova tarefa"
            />
            <button>Criar</button>
          </div>
        </form>
        <TaskContainer tasks={tasks} />
      </div>
    </>
  );
}

export default App;
