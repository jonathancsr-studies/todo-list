export interface Task {
  name: string;
}

interface TaskProps {
  task: Task;
}

export function Task({ task }: TaskProps) {
  return (
    <span
      style={{
        margin: "0.25rem 0",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      {task.name}
    </span>
  );
}
