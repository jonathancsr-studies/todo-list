import { useState } from "react";
import { v4 } from "uuid";
import { Input, Task, TaskContainer } from "../components";
export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = event.currentTarget["new-task"].value;
    setTasks([...tasks, { id: v4(), name: newTask }]);
  };

  return (
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
  );
}
