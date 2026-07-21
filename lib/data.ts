import type {
  Session,
  Review,
  Stat,
  DiscountTier,
  Coach,
} from "./types";

export const PROGRAM = {
  title: "Summer 2026 · 2-Week Program",
  pricePerChild: 120, // KWD
  currency: "KWD",
};

/**
 * The open sessions ("seasons"). Returned by the simulated fetch in
 * `getSessions()`. Swap for a real API call without touching the UI.
 */
export const SESSIONS: Session[] = [
  {
    key: "morning",
    tag: "Morning",
    icon: "🌅",
    time: "8:00 – 12:00",
    ages: "6–10",
    minAge: 6,
    maxAge: 10,
    capacity: 24,
    taken: 19,
    bg: "linear-gradient(150deg,#fff6e6,#ffe9c7)",
    fg: "#a5610a",
    chip: "rgba(165,97,10,0.12)",
  },
  {
    key: "afternoon",
    tag: "Afternoon",
    icon: "☀️",
    time: "12:00 – 4:00",
    ages: "11–13",
    minAge: 11,
    maxAge: 13,
    capacity: 24,
    taken: 24,
    bg: "linear-gradient(150deg,#eef5ff,#d7e6ff)",
    fg: "#0b4fb0",
    chip: "rgba(11,79,176,0.1)",
  },
  {
    key: "evening",
    tag: "Evening",
    icon: "🌇",
    time: "4:00 – 8:00",
    ages: "14–18",
    minAge: 14,
    maxAge: 18,
    capacity: 24,
    taken: 11,
    bg: "linear-gradient(150deg,#f3edff,#e4d8ff)",
    fg: "#5b34b8",
    chip: "rgba(91,52,184,0.1)",
  },
];

export const STATS: Stat[] = [
  { label: "Program dates", value: "Sat, Aug 1 → 13" },
  { label: "Rest day", value: "Every Friday" },
  { label: "Duration", value: "2 weeks" },
];

export const REVIEWS: Review[] = [
  {
    initial: "N",
    name: "Noura A.",
    avatar: "linear-gradient(150deg,#2b7fff,#0b3a86)",
    rating: 5,
    text: "Best summer program in Kuwait! My boys learned to swim in just two weeks and the coaches were amazing.",
  },
  {
    initial: "F",
    name: "Fatima Al-Ali",
    avatar: "linear-gradient(150deg,#a855f7,#6d28d9)",
    rating: 5,
    text: "Registration was so easy and the groups are small. My daughter loves her morning session.",
  },
  {
    initial: "K",
    name: "Khaled Al-Mutairi",
    avatar: "linear-gradient(150deg,#10b981,#047857)",
    rating: 5,
    text: "Clean, safe and great family pricing. Highly recommend for anyone with kids.",
  },
];

export const DISCOUNT_TIERS: DiscountTier[] = [
  { label: "1 child", value: "No discount" },
  { label: "2 children", value: "5% off" },
  { label: "3 children", value: "10% off" },
  { label: "4+ children", value: "15% off", highlight: true },
];

export const COACHES: Coach[] = [
  {
    initial: "Y",
    name: "Coach Yousef Al-Rashid",
    role: "Head coach · Ages 6–10",
    avatar: "linear-gradient(150deg,#2b7fff,#0b3a86)",
    rating: 5,
    ratingLabel: "5.0",
    cv: [
      "12 years coaching kids",
      "Certified lifeguard & first aid",
      "Former Kuwait freestyle champion",
    ],
    quote:
      "My son was afraid of the water — after one week with Coach Yousef he swims with confidence!",
    quoteBy: "Noura A.",
  },
  {
    initial: "S",
    name: "Coach Sara Al-Enezi",
    role: "Girls coach · Ages 11–13",
    avatar: "linear-gradient(150deg,#ec4899,#be185d)",
    rating: 5,
    ratingLabel: "4.9",
    cv: [
      "8 years coaching young girls",
      "FINA-certified instructor",
      "Specialist in beginner swimmers",
    ],
    quote:
      "Coach Sara is so patient — my daughter counts down the hours to her session every day.",
    quoteBy: "Fatima Al-Ali",
  },
  {
    initial: "A",
    name: "Coach Ahmed Al-Balushi",
    role: "Advanced coach · Ages 14–18",
    avatar: "linear-gradient(150deg,#10b981,#047857)",
    rating: 5,
    ratingLabel: "4.9",
    cv: [
      "10 years coaching experience",
      "Certified racing coach",
      "Trained Gulf championship medalists",
    ],
    quote:
      "He took my son from intermediate to competing in tournaments in a single summer.",
    quoteBy: "Khaled Al-Mutairi",
  },
];

export const LOCATION = {
  area: "Sabah Al Salem",
  blurb:
    "You will find us right next to Oxygen Club in Sabah Al Salem — easy parking and a 2-minute walk from the entrance.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Oxygen+Club+Sabah+Al+Salem+Kuwait",
};

export const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced"];
