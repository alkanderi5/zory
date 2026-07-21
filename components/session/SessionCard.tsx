import type { Session } from "@/lib/types";
import { spotsLeft, isFull } from "@/lib/sessions";
import styles from "./SessionCard.module.css";

/** A single age-group session card. */
export function SessionCard({ session }: { session: Session }) {
  const full = isFull(session);
  const left = spotsLeft(session);
  const low = !full && left <= 6;

  const seatTone = full ? styles.seatFull : low ? styles.seatLow : styles.seatOk;
  const seatLabel = full ? "FULL" : `${left} spots left`;

  return (
    <article
      className={styles.card}
      style={{ background: session.bg, color: session.fg }}
      aria-label={`${session.tag} session, ages ${session.ages}, ${seatLabel}`}
    >
      <span className={`${styles.seat} ${seatTone}`}>{seatLabel}</span>
      <span className={styles.icon} aria-hidden="true">
        {session.icon}
      </span>
      <p className={styles.tag}>{session.tag}</p>
      <p className={styles.time}>{session.time}</p>
      <span className={styles.ages} style={{ background: session.chip }}>
        Ages {session.ages}
      </span>
    </article>
  );
}
