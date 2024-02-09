import { useState } from "react";
import { v4 } from "uuid";
import { Input, Task, TaskContainer } from "../../components";
import PlusIcon from "../../components/Icons/PlusIcon";
import styles from "./styles.module.css";

// const mockedTasks: Task[] = [
//   {
//     id: v4(),
//     name: "Tarefa 1",
//     isCompleted: false,
//   },
//   {
//     id: v4(),
//     name: "Tarefa 2",
//     isCompleted: true,
//   },
//   {
//     id: v4(),
//     name: "Tarefa 3",
//     isCompleted: false,
//   },
// ];
const mockedTasks: Task[] = [];
export function Home() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(mockedTasks);

  function handleAddNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask = event.currentTarget["new-task"].value;
    setTasks([...tasks, { id: v4(), name: newTask, isCompleted: false }]);
    setNewTask("");
  }

  const handleRemoveTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  function handleChangeNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.currentTarget.value);
  }

  function handleCompleteTask(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action="" onSubmit={handleAddNewTask}>
          <Input
            type="text"
            name="new-task"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleChangeNewTask}
          />
          <button>
            Criar <PlusIcon />
          </button>
        </form>
        <div className={styles.resumeContainer}>
          <span className={styles.createdTasks}>
            Tarefas criadas <span>{tasks.length}</span>
          </span>
          <span className={styles.completedTasks}>
            Concluídas{" "}
            <span>
              {tasks.length === 0
                ? 0
                : `${tasks.filter((task) => task.isCompleted).length} de ${
                    tasks.length
                  }`}
            </span>
          </span>
        </div>
        <TaskContainer
          tasks={tasks}
          onTaskComplete={handleCompleteTask}
          onTaskDelete={handleRemoveTask}
        />
      </div>
    </div>
  );
}
