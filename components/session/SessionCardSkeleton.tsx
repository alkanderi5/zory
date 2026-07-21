import styles from "./SessionCardSkeleton.module.css";

/** Placeholder shown for each session while the list loads. */
export function SessionCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={`skeleton ${styles.seat}`} />
      <div className={`skeleton ${styles.icon}`} />
      <div className={`skeleton ${styles.tag}`} />
      <div className={`skeleton ${styles.time}`} />
      <div className={`skeleton ${styles.ages}`} />
    </div>
  );
}
