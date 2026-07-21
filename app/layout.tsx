import type { Metadata, Viewport } from "next";
import { manrope, cairo } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZORY · Summer Swim School",
  description:
    "Register your children for two weeks of coached swimming in Kuwait. Small groups, sorted by age, with three daily sessions to fit your schedule.",
};

export const viewport: Viewport = {
  themeColor: "#061225",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
