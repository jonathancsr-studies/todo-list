import { Task } from "../Task";

interface TaskContainerProps {
  tasks: Task[];
}

export function TaskContainer({ tasks = [] }: TaskContainerProps) {
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
        <Task key={task.name} task={task} />
      ))}
    </div>
  );
}
