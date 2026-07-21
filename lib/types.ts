export type SessionKey = "morning" | "afternoon" | "evening";

/** A single age-group session ("season") shown on the landing page. */
export interface Session {
  key: SessionKey;
  tag: string; // MORNING / AFTERNOON / EVENING
  icon: string; // emoji
  time: string; // "8:00 – 12:00"
  ages: string; // "6–10"
  minAge: number;
  maxAge: number;
  capacity: number;
  taken: number;
  /** Card theme colors. */
  bg: string;
  fg: string;
  chip: string;
}

export interface Review {
  initial: string;
  name: string;
  avatar: string; // gradient
  text: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
}

export interface DiscountTier {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Coach {
  initial: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  ratingLabel: string;
  cv: string[];
  quote: string;
  quoteBy: string;
}

export type Gender = "male" | "female";

export interface Kid {
  id: string;
  name: string;
  birthdate: string;
  gender: Gender | null;
  level: string | null;
  medical: string;
}

export interface ParentInfo {
  name: string;
  email: string;
  phone: string;
  phone2: string;
}
