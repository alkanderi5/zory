import styles from "./Avatar.module.css";

interface AvatarProps {
  initial: string;
  gradient: string;
  size?: number;
}

/** Circular gradient monogram used for reviewers and coaches. */
export function Avatar({ initial, gradient, size = 44 }: AvatarProps) {
  return (
    <span
      className={styles.avatar}
      style={{
        background: gradient,
        width: size,
        height: size,
        fontSize: size * 0.4,
      }}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}
