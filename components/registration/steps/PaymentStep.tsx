"use client";

import { formatKwd } from "@/lib/pricing";
import type { RegistrationForm } from "../useRegistrationForm";
import f from "../fields.module.css";
import styles from "./PaymentStep.module.css";

const METHODS = [
  { id: "knet", label: "KNET", icon: "💳" },
  { id: "visa", label: "Visa / Mastercard", icon: "🏦" },
  { id: "apple", label: "Apple Pay", icon: "" },
];

const TERMS = [
  "I confirm the information provided is accurate.",
  "I accept the pool safety rules and code of conduct.",
];

export function PaymentStep({ form }: { form: RegistrationForm }) {
  const { price, paymentMethod, setPaymentMethod, terms, toggleTerm } = form;

  return (
    <div>
      <h2 className={f.stepTitle}>Payment</h2>
      <p className={f.stepSub}>
        Secure your spots — you&apos;ll pay {formatKwd(price.total)} for{" "}
        {price.count} {price.count === 1 ? "child" : "children"}.
      </p>

      <div className={styles.methods}>
        {METHODS.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`${styles.method} ${paymentMethod === m.id ? styles.methodActive : ""}`}
            onClick={() => setPaymentMethod(m.id)}
          >
            <span className={styles.methodIcon} aria-hidden="true">
              {m.icon}
            </span>
            {m.label}
          </button>
        ))}
      </div>

      <div className={styles.cardNote}>
        Payment is completed on your bank&apos;s secure page after you confirm —
        this demo doesn&apos;t process real payments.
      </div>

      <ul className={styles.terms}>
        {TERMS.map((term, i) => (
          <li key={term}>
            <label className={styles.term}>
              <input
                type="checkbox"
                checked={terms[i] ?? false}
                onChange={() => toggleTerm(i)}
              />
              <span>{term}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
