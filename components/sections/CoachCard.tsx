import type { Coach } from "@/lib/types";
import { Avatar } from "@/components/ui/Avatar";
import { Stars } from "@/components/ui/Stars";
import styles from "./CoachCard.module.css";

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <Avatar initial={coach.initial} gradient={coach.avatar} size={48} />
        <div>
          <h3 className={styles.name}>{coach.name}</h3>
          <p className={styles.role}>{coach.role}</p>
        </div>
      </header>

      <div className={styles.rating}>
        <Stars rating={coach.rating} size={14} />
        <span>{coach.ratingLabel}</span>
      </div>

      <ul className={styles.cv}>
        {coach.cv.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <blockquote className={styles.quote}>
        <p>&ldquo;{coach.quote}&rdquo;</p>
        <cite>— {coach.quoteBy}</cite>
      </blockquote>
    </article>
  );
}
