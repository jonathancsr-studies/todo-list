import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

import styles from "./styles.module.css";

export function Input({ ...props }: InputProps) {
  return <input className={styles.input} {...props} type="text" />;
}
