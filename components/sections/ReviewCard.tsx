import type { Review } from "@/lib/types";
import { Avatar } from "@/components/ui/Avatar";
import { Stars } from "@/components/ui/Stars";
import styles from "./ReviewCard.module.css";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <Avatar initial={review.initial} gradient={review.avatar} size={38} />
        <span className={styles.name}>{review.name}</span>
        <Stars rating={review.rating} size={12} />
      </header>
      <p className={styles.text}>{review.text}</p>
    </article>
  );
}
