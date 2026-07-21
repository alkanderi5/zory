"use client";

import { ageFromBirthdate, formatKwd } from "@/lib/pricing";
import type { RegistrationForm } from "../useRegistrationForm";
import f from "../fields.module.css";
import styles from "./ReviewStep.module.css";

export function ReviewStep({ form }: { form: RegistrationForm }) {
  const { parent, kids, price, kidSession } = form;
  const phone = [parent.phone, parent.phone2].filter(Boolean).join(" · ");

  return (
    <div>
      <h2 className={f.stepTitle}>Review your registration</h2>

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>Parent</h3>
        <dl className={styles.rows}>
          <Row label="Name" value={parent.name} />
          <Row label="Email" value={parent.email} />
          <Row label="Phone" value={phone} />
        </dl>
      </section>

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>
          Children ({kids.length})
        </h3>
        <div className={styles.kids}>
          {kids.map((kid) => {
            const session = kidSession(kid);
            return (
              <div key={kid.id} className={styles.kid}>
                <span className={styles.kidName}>
                  {kid.name || "Unnamed"}
                </span>
                <span className={styles.kidMeta}>
                  Age {ageFromBirthdate(kid.birthdate) ?? "—"}
                  {session ? ` · ${session.icon} ${session.tag}` : ""}
                  {kid.gender ? ` · ${kid.gender === "male" ? "Boy" : "Girl"}` : ""}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.totals}>
        <Total label={`Subtotal (${price.count} × 120.000)`} value={formatKwd(price.subtotal)} />
        {price.discountPct > 0 && (
          <Total
            label={`Family discount (${price.discountPct}%)`}
            value={`− ${formatKwd(price.discount)}`}
            accent
          />
        )}
        <div className={styles.grandTotal}>
          <span>Total</span>
          <span>{formatKwd(price.total)}</span>
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.row}>
      <dt>{label}</dt>
      <dd>{value || "—"}</dd>
    </div>
  );
}

function Total({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className={`${styles.total} ${accent ? styles.accent : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
