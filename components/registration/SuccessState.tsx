"use client";

import { formatKwd } from "@/lib/pricing";
import { Button } from "@/components/ui/Button";
import styles from "./SuccessState.module.css";

export function SuccessState({
  parentName,
  kidCount,
  total,
  onClose,
}: {
  parentName: string;
  kidCount: number;
  total: number;
  onClose: () => void;
}) {
  return (
    <div className={styles.success}>
      <span className={styles.check} aria-hidden="true">
        ✓
      </span>
      <h2 className={styles.title}>You&apos;re all set{parentName ? `, ${parentName.split(" ")[0]}` : ""}!</h2>
      <p className={styles.text}>
        We&apos;ve reserved {kidCount} {kidCount === 1 ? "spot" : "spots"} for a
        total of {formatKwd(total)}. A confirmation with session details is on
        its way to your inbox.
      </p>
      <Button variant="primary" size="md" onClick={onClose}>
        Done
      </Button>
    </div>
  );
}
