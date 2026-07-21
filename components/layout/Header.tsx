"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { RegisterButton } from "@/components/registration/RegisterButton";
import styles from "./Header.module.css";

/** Sticky top navigation. Gains a solid background once the page is scrolled. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      id="top"
    >
      <div className={`container ${styles.inner}`}>
        <Logo />
        <nav className={styles.nav} aria-label="Primary">
          <a href="#sessions" className={styles.link}>
            Sessions
          </a>
          <a href="#pricing" className={styles.link}>
            Pricing
          </a>
          <a href="#coaches" className={styles.link}>
            Coaches
          </a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.lang} type="button" aria-label="Switch to Arabic">
            العربية
          </button>
          <RegisterButton>Register</RegisterButton>
        </div>
      </div>
    </header>
  );
}
