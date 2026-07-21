"use client";

import type { RegistrationForm } from "../useRegistrationForm";
import f from "../fields.module.css";

export function ParentStep({ form }: { form: RegistrationForm }) {
  const { parent, updateParent, showPhone2, setShowPhone2 } = form;

  return (
    <div>
      <h2 className={f.stepTitle}>Parent details</h2>
      <p className={f.stepSub}>We&apos;ll use these to confirm your booking.</p>

      <label className={f.field}>
        <span className={f.label}>Full name</span>
        <input
          className={f.input}
          value={parent.name}
          onChange={(e) => updateParent("name", e.target.value)}
          placeholder="Your full name"
          autoComplete="name"
        />
      </label>

      <label className={f.field}>
        <span className={f.label}>Email</span>
        <input
          className={f.input}
          type="email"
          inputMode="email"
          value={parent.email}
          onChange={(e) => updateParent("email", e.target.value)}
          placeholder="name@email.com"
          autoComplete="email"
        />
      </label>

      <label className={f.field}>
        <span className={f.label}>Phone (WhatsApp)</span>
        <input
          className={f.input}
          inputMode="tel"
          value={parent.phone}
          onChange={(e) => updateParent("phone", e.target.value)}
          placeholder="+965 ..."
          autoComplete="tel"
        />
      </label>

      {showPhone2 ? (
        <label className={f.field}>
          <span className={f.label}>Second phone</span>
          <input
            className={f.input}
            inputMode="tel"
            value={parent.phone2}
            onChange={(e) => updateParent("phone2", e.target.value)}
            placeholder="+965 ..."
          />
        </label>
      ) : (
        <button
          type="button"
          className={f.linkButton}
          onClick={() => setShowPhone2(true)}
        >
          + Add a second phone number
        </button>
      )}
    </div>
  );
}
