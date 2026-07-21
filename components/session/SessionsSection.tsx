"use client";

import { useEffect, useState } from "react";
import type { Session } from "@/lib/types";
import { getSessions } from "@/lib/sessions";
import { useRegistration } from "@/components/registration/RegistrationContext";
import { SessionCard } from "./SessionCard";
import { SessionCardSkeleton } from "./SessionCardSkeleton";
import { SessionsEmptyState } from "./SessionsEmptyState";
import { PoolsBanner } from "./PoolsBanner";
import styles from "./SessionsSection.module.css";

type Status = "loading" | "ready" | "empty";

const SKELETON_COUNT = 3;

/**
 * "Sessions by age" — fetches the open sessions on mount and swaps between
 * a loading skeleton, the empty state, and the real cards.
 */
export function SessionsSection() {
  const [status, setStatus] = useState<Status>("loading");
  const [sessions, setSessions] = useState<Session[]>([]);
  const { open } = useRegistration();

  useEffect(() => {
    let active = true;
    getSessions().then((data) => {
      if (!active) return;
      setSessions(data);
      setStatus(data.length > 0 ? "ready" : "empty");
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="sessions" className={styles.section}>
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.title}>Sessions by age</h2>
          <p className={styles.subtitle}>
            Your child is placed automatically based on their age — no need to
            choose.
          </p>
        </header>

        {status === "empty" ? (
          <SessionsEmptyState onNotify={open} />
        ) : (
          <div className={styles.grid} aria-busy={status === "loading"}>
            {status === "loading"
              ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                  <SessionCardSkeleton key={i} />
                ))
              : sessions.map((s) => <SessionCard key={s.key} session={s} />)}
          </div>
        )}

        {status !== "empty" && <PoolsBanner />}
      </div>
    </section>
  );
}
