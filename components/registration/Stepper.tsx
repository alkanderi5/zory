import { STEPS } from "./useRegistrationForm";
import styles from "./Stepper.module.css";

export function Stepper({ current }: { current: number }) {
  return (
    <ol className={styles.stepper} aria-label="Registration progress">
      {STEPS.map((label, i) => {
        const state =
          i < current ? "done" : i === current ? "active" : "upcoming";
        return (
          <li
            key={label}
            className={`${styles.step} ${styles[state]}`}
            aria-current={i === current ? "step" : undefined}
          >
            <span className={styles.dot}>{i < current ? "✓" : i + 1}</span>
            <span className={styles.label}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
