import { Task } from "../Task";

interface TaskContainerProps {
  tasks: Task[];
  onTaskComplete: (id: string) => void;
  onTaskDelete: (id: string) => void;
}

export function TaskContainer({
  tasks = [],
  onTaskComplete,
  onTaskDelete,
}: TaskContainerProps) {
  if (tasks.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tasks.map((task) => (
        <Task
          key={task.name}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
}
