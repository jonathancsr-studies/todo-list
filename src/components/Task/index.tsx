import { Checkbox } from "../Checkbox";
import TrashIcon from "../Icons/TrashIcon";
import styles from "./styles.module.css";
export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
  onTaskComplete: (id: string) => void;
  onTaskDelete: (id: string) => void;
}

export function Task({ task, onTaskComplete, onTaskDelete }: TaskProps) {
  function handleTaskComplete(event?: React.MouseEvent<HTMLDivElement>) {
    onTaskComplete(task.id);
    event?.stopPropagation();
  }

  function handleTaskDelete(event?: React.MouseEvent<HTMLButtonElement>) {
    onTaskDelete(task.id);
    event?.stopPropagation();
  }

  return (
    <div onClick={(e) => handleTaskComplete(e)} className={styles.task}>
      <Checkbox value={task.isCompleted} onChange={handleTaskComplete} />
      <p className={task.isCompleted ? styles.checkedText : ""}>{task.name}</p>
      <button onClick={(e) => handleTaskDelete(e)}>
        <TrashIcon />
      </button>
    </div>
  );
}
