"use client";

import { useEffect, useRef, useState } from "react";
import type { Session } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { useRegistrationForm } from "./useRegistrationForm";
import { Stepper } from "./Stepper";
import { ParentStep } from "./steps/ParentStep";
import { KidsStep } from "./steps/KidsStep";
import { ReviewStep } from "./steps/ReviewStep";
import { PaymentStep } from "./steps/PaymentStep";
import { SuccessState } from "./SuccessState";
import styles from "./RegistrationModal.module.css";

export function RegistrationModal({
  sessions,
  onClose,
}: {
  sessions: Session[];
  onClose: () => void;
}) {
  const form = useRegistrationForm(sessions);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Lock scroll + close on Escape.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleConfirm = () => {
    setSubmitting(true);
    // Simulate a network round-trip to the booking API.
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1200);
  };

  const isLast = form.step === 3;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Register your children"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close registration"
        >
          ✕
        </button>

        {done ? (
          <SuccessState
            parentName={form.parent.name}
            kidCount={form.kids.length}
            total={form.price.total}
            onClose={onClose}
          />
        ) : (
          <>
            <div className={styles.header}>
              <Stepper current={form.step} />
            </div>

            <div className={styles.body}>
              {form.step === 0 && <ParentStep form={form} />}
              {form.step === 1 && <KidsStep form={form} />}
              {form.step === 2 && <ReviewStep form={form} />}
              {form.step === 3 && <PaymentStep form={form} />}
            </div>

            <div className={styles.footer}>
              {form.step > 0 ? (
                <Button variant="ghost" onClick={form.back} disabled={submitting}>
                  Back
                </Button>
              ) : (
                <span />
              )}

              {isLast ? (
                <Button
                  variant="primary"
                  onClick={handleConfirm}
                  disabled={!form.canContinue() || submitting}
                >
                  {submitting ? "Processing…" : "Confirm registration"}
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={form.next}
                  disabled={!form.canContinue()}
                >
                  Continue
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
