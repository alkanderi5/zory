import type { Session, SessionKey } from "./types";
import { SESSIONS } from "./data";

/**
 * Simulates fetching the currently-open sessions from a backend.
 *
 * Swap the body for a real `fetch()` — the UI (skeleton, empty state, cards)
 * reacts purely to the returned promise, so nothing else needs to change.
 *
 * Flip `OPEN_SESSIONS` to `false` to preview the "no sessions open yet"
 * empty state.
 */
const OPEN_SESSIONS = true;
const FAKE_LATENCY_MS = 1400;

export function getSessions(): Promise<Session[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(OPEN_SESSIONS ? SESSIONS : []);
    }, FAKE_LATENCY_MS);
  });
}

export function spotsLeft(session: Session): number {
  return Math.max(0, session.capacity - session.taken);
}

export function isFull(session: Session): boolean {
  return spotsLeft(session) <= 0;
}

/** Which session an age maps to (used by the registration flow). */
export function sessionForAge(
  sessions: Session[],
  age: number | null,
): Session | null {
  if (age == null) return null;
  return sessions.find((s) => age >= s.minAge && age <= s.maxAge) ?? null;
}

export function sessionByKey(
  sessions: Session[],
  key: SessionKey,
): Session | undefined {
  return sessions.find((s) => s.key === key);
}
