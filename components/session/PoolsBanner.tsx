import styles from "./PoolsBanner.module.css";

/** "Two separate pools" reassurance banner under the session grid. */
export function PoolsBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.icons} aria-hidden="true">
        <span className={styles.pill} style={{ background: "rgba(43,127,255,0.18)" }}>
          🏊‍♂️
        </span>
        <span className={styles.pill} style={{ background: "rgba(255,122,182,0.18)" }}>
          🏊‍♀️
        </span>
      </div>
      <div>
        <p className={styles.title}>Two separate pools</p>
        <p className={styles.text}>
          Boys and girls train in their own dedicated pool.
        </p>
      </div>
    </div>
  );
}
