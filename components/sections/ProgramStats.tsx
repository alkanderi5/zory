import { STATS } from "@/lib/data";
import styles from "./ProgramStats.module.css";

export function ProgramStats() {
  return (
    <div className="container">
      <dl className={styles.grid}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.card}>
            <dt className={styles.label}>{s.label}</dt>
            <dd className={styles.value}>{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
