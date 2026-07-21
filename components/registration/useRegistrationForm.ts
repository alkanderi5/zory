"use client";

import { useMemo, useState } from "react";
import type { Kid, ParentInfo, Session } from "@/lib/types";
import { ageFromBirthdate, priceFor } from "@/lib/pricing";
import { sessionForAge } from "@/lib/sessions";

export const STEPS = ["Parent", "Children", "Review", "Payment"] as const;
export type StepIndex = 0 | 1 | 2 | 3;

let kidSeq = 0;
function emptyKid(): Kid {
  kidSeq += 1;
  return {
    id: `kid-${kidSeq}`,
    name: "",
    birthdate: "",
    gender: null,
    level: null,
    medical: "",
  };
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useRegistrationForm(sessions: Session[]) {
  const [step, setStep] = useState<StepIndex>(0);
  const [parent, setParent] = useState<ParentInfo>({
    name: "",
    email: "",
    phone: "",
    phone2: "",
  });
  const [showPhone2, setShowPhone2] = useState(false);
  const [kids, setKids] = useState<Kid[]>([emptyKid()]);
  const [paymentMethod, setPaymentMethod] = useState("knet");
  const [terms, setTerms] = useState<boolean[]>([false, false]);

  const price = useMemo(() => priceFor(kids.length), [kids.length]);

  const toggleTerm = (i: number) =>
    setTerms((list) => list.map((v, idx) => (idx === i ? !v : v)));

  const updateParent = (field: keyof ParentInfo, value: string) =>
    setParent((p) => ({ ...p, [field]: value }));

  const updateKid = (id: string, patch: Partial<Kid>) =>
    setKids((list) => list.map((k) => (k.id === id ? { ...k, ...patch } : k)));

  const addKid = () => setKids((list) => [...list, emptyKid()]);
  const removeKid = (id: string) =>
    setKids((list) => (list.length > 1 ? list.filter((k) => k.id !== id) : list));

  const kidSession = (k: Kid): Session | null =>
    sessionForAge(sessions, ageFromBirthdate(k.birthdate));

  const kidValid = (k: Kid): boolean => {
    const age = ageFromBirthdate(k.birthdate);
    const session = kidSession(k);
    return (
      k.name.trim().length >= 2 &&
      age != null &&
      session != null &&
      k.gender != null
    );
  };

  const parentValid =
    parent.name.trim().length >= 2 &&
    emailRe.test(parent.email) &&
    parent.phone.trim().length >= 6;

  const kidsValid = kids.length > 0 && kids.every(kidValid);
  const paymentValid = terms.every(Boolean);

  const canContinue = (): boolean => {
    if (step === 0) return parentValid;
    if (step === 1) return kidsValid;
    if (step === 3) return paymentValid;
    return true;
  };

  const next = () =>
    setStep((s) => (Math.min(3, s + 1) as StepIndex));
  const back = () => setStep((s) => (Math.max(0, s - 1) as StepIndex));
  const goTo = (target: StepIndex) => setStep(target);

  return {
    step,
    parent,
    showPhone2,
    kids,
    price,
    paymentMethod,
    terms,
    parentValid,
    kidsValid,
    paymentValid,
    updateParent,
    setShowPhone2,
    updateKid,
    addKid,
    removeKid,
    setPaymentMethod,
    toggleTerm,
    kidSession,
    kidValid,
    canContinue,
    next,
    back,
    goTo,
  };
}

export type RegistrationForm = ReturnType<typeof useRegistrationForm>;
