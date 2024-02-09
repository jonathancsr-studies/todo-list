import styles from "./styles.module.css";

interface CheckboxProps {
  value: boolean;
  onChange: () => void;
}
export function Checkbox({ value }: CheckboxProps) {
  return <input type="checkbox" className={styles.checkbox} checked={value} />;
}
