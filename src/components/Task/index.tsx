import { useState } from "react";
import styles from "./styles.module.css";
export interface Task {
  id: string;
  name: string;
}

interface TaskProps {
  task: Task;
}

export function Task({ task }: TaskProps) {
  const [check, setCheck] = useState(false);

  function handleCheckTask() {
    setCheck(!check);
  }

  return (
    <button onClick={handleCheckTask} className={styles.task}>
      <span>{check && "feito"}</span>
      <p className={check ? styles.checkedText : ""}>{task.name}</p>
      <span>Trash</span>
    </button>
  );
}
