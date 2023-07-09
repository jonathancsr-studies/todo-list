import { useState } from "react";
import { v4 } from "uuid";
import { Input, Task, TaskContainer } from "../../components";
import styles from "./styles.module.css";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = event.currentTarget["new-task"].value;
    setTasks([...tasks, { id: v4(), name: newTask }]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action="" onSubmit={handleAddNewTask}>
          <Input
            type="text"
            name="new-task"
            placeholder="Adicione uma nova tarefa"
          />
          <button>Criar</button>
        </form>
        <TaskContainer tasks={tasks} />
      </div>
    </div>
  );
}
