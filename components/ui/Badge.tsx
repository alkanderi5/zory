import styles from "./Badge.module.css";

type Tone = "brand" | "amber" | "green" | "red" | "neutral";

interface BadgeProps {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

/** Small pill label — seat counts, "FULL", program tag, etc. */
export function Badge({
  tone = "neutral",
  dot = false,
  children,
  className = "",
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[tone]} ${className}`}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
