import { PROGRAM } from "./data";

export interface PriceBreakdown {
  count: number;
  subtotal: number;
  discountPct: number;
  discount: number;
  total: number;
}

/** Family pricing: 120 KWD/child, 5% off per extra child, capped at 15%. */
export function priceFor(count: number): PriceBreakdown {
  const subtotal = count * PROGRAM.pricePerChild;
  const discountPct = Math.min(15, Math.max(0, (count - 1) * 5));
  const discount = (subtotal * discountPct) / 100;
  return {
    count,
    subtotal,
    discountPct,
    discount,
    total: subtotal - discount,
  };
}

export function formatKwd(amount: number): string {
  return `${amount.toFixed(3)} ${PROGRAM.currency}`;
}

/** Age at the start of the program (Aug 1, 2026) from a birthdate string. */
export function ageFromBirthdate(birthdate: string): number | null {
  if (!birthdate) return null;
  const dob = new Date(birthdate);
  if (Number.isNaN(dob.getTime())) return null;
  const start = new Date("2026-08-01");
  let age = start.getFullYear() - dob.getFullYear();
  const m = start.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && start.getDate() < dob.getDate())) age--;
  return age;
}
