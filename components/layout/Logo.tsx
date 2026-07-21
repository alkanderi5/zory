import styles from "./Logo.module.css";

/** ZORY wordmark + fish glyph. */
export function Logo() {
  return (
    <a href="#top" className={styles.logo} aria-label="ZORY Summer Swim School">
      <span className={styles.mark} aria-hidden="true">
        <svg viewBox="0 0 32 32" width="22" height="22">
          <path
            d="M6 16 C11 9, 21 8, 27 15 L30 12 C28 17, 28 15, 28 16 C28 17, 28 15, 30 20 L27 17 C21 24, 11 23, 6 16 Z"
            fill="#eef4fc"
          />
          <circle cx="11" cy="14.5" r="1.7" fill="#0b3a86" />
        </svg>
      </span>
      <span className={styles.text}>
        <strong>ZORY</strong>
        <small>Summer Swim School</small>
      </span>
    </a>
  );
}
