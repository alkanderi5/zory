"use client";

import type { Kid } from "@/lib/types";
import { SKILL_LEVELS } from "@/lib/data";
import { ageFromBirthdate } from "@/lib/pricing";
import type { RegistrationForm } from "../useRegistrationForm";
import f from "../fields.module.css";
import styles from "./KidsStep.module.css";

export function KidsStep({ form }: { form: RegistrationForm }) {
  const { kids, updateKid, addKid, removeKid, kidSession } = form;

  return (
    <div>
      <h2 className={f.stepTitle}>Your children</h2>
      <p className={f.stepSub}>
        Each child is placed in a session automatically based on their age.
      </p>

      <div className={styles.list}>
        {kids.map((kid, i) => (
          <KidRow
            key={kid.id}
            kid={kid}
            index={i}
            canRemove={kids.length > 1}
            session={kidSession(kid)}
            onChange={(patch) => updateKid(kid.id, patch)}
            onRemove={() => removeKid(kid.id)}
          />
        ))}
      </div>

      <button type="button" className={styles.addKid} onClick={addKid}>
        + Add another child
      </button>
    </div>
  );
}

function KidRow({
  kid,
  index,
  canRemove,
  session,
  onChange,
  onRemove,
}: {
  kid: Kid;
  index: number;
  canRemove: boolean;
  session: ReturnType<RegistrationForm["kidSession"]>;
  onChange: (patch: Partial<Kid>) => void;
  onRemove: () => void;
}) {
  const age = ageFromBirthdate(kid.birthdate);
  const outOfRange = kid.birthdate !== "" && session == null;

  return (
    <fieldset className={styles.row}>
      <legend className={styles.legend}>
        <span>Child {index + 1}</span>
        {canRemove && (
          <button type="button" className={styles.remove} onClick={onRemove}>
            Remove
          </button>
        )}
      </legend>

      <label className={f.field}>
        <span className={f.label}>Child&apos;s name</span>
        <input
          className={f.input}
          value={kid.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Child's full name"
        />
      </label>

      <label className={f.field}>
        <span className={f.label}>Date of birth</span>
        <input
          className={f.input}
          type="date"
          min="2007-01-01"
          max="2021-12-31"
          value={kid.birthdate}
          onChange={(e) => onChange({ birthdate: e.target.value })}
        />
        {session && (
          <span className={styles.placement}>
            Age {age} · {session.icon} {session.tag} ({session.time})
          </span>
        )}
        {outOfRange && (
          <span className={styles.warning}>
            Sorry — the program is for ages 6–18.
          </span>
        )}
      </label>

      <div className={f.field}>
        <span className={f.label}>Gender</span>
        <div className={f.choices}>
          {(["male", "female"] as const).map((g) => (
            <button
              key={g}
              type="button"
              className={`${f.choice} ${kid.gender === g ? f.choiceActive : ""}`}
              onClick={() => onChange({ gender: g })}
            >
              {g === "male" ? "Boy" : "Girl"}
            </button>
          ))}
        </div>
      </div>

      <div className={f.field}>
        <span className={f.label}>Swimming level</span>
        <div className={f.choices}>
          {SKILL_LEVELS.map((lv) => (
            <button
              key={lv}
              type="button"
              className={`${f.choice} ${kid.level === lv ? f.choiceActive : ""}`}
              onClick={() => onChange({ level: lv })}
            >
              {lv}
            </button>
          ))}
        </div>
      </div>

      <label className={f.field} style={{ marginBottom: 0 }}>
        <span className={f.label}>Medical notes (optional)</span>
        <textarea
          className={f.textarea}
          rows={2}
          value={kid.medical}
          onChange={(e) => onChange({ medical: e.target.value })}
          placeholder="Allergies, conditions we should know about…"
        />
      </label>
    </fieldset>
  );
}
