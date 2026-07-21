import { Manrope, Cairo } from "next/font/google";

// Manrope for headings/display, Cairo for body — mirrors the original design
// and keeps Arabic support for the (future) bilingual toggle.
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
