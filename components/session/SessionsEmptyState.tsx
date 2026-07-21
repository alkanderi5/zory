import styles from "./SessionsEmptyState.module.css";

interface SessionsEmptyStateProps {
  onNotify?: () => void;
}

/** Shown when the fetch returns no open sessions. */
export function SessionsEmptyState({ onNotify }: SessionsEmptyStateProps) {
  return (
    <div className={styles.empty} role="status">
      <span className={styles.icon} aria-hidden="true">
        🏊
      </span>
      <h3 className={styles.title}>No sessions open yet</h3>
      <p className={styles.text}>
        Registration for the next program hasn&apos;t opened. Leave your email
        and we&apos;ll let you know the moment spots go live.
      </p>
      {onNotify && (
        <button type="button" className={styles.button} onClick={onNotify}>
          Notify me when it opens
        </button>
      )}
    </div>
  );
}
