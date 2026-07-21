import styles from "./Stars.module.css";

interface StarsProps {
  rating?: number;
  size?: number;
}

/** Simple 5-star rating display. */
export function Stars({ rating = 5, size = 14 }: StarsProps) {
  const rounded = Math.round(rating);
  return (
    <span
      className={styles.stars}
      style={{ fontSize: size }}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {"★★★★★".slice(0, rounded)}
      <span className={styles.empty}>{"★★★★★".slice(rounded)}</span>
    </span>
  );
}
