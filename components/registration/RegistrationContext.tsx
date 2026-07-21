"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { Session } from "@/lib/types";
import { RegistrationModal } from "./RegistrationModal";

interface RegistrationContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const RegistrationContext = createContext<RegistrationContextValue | null>(null);

/**
 * Provides a single registration modal instance for the whole page.
 * Any CTA can call `useRegistration().open()`.
 */
export function RegistrationProvider({
  sessions,
  children,
}: {
  sessions: Session[];
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <RegistrationContext.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && <RegistrationModal sessions={sessions} onClose={close} />}
    </RegistrationContext.Provider>
  );
}

export function useRegistration(): RegistrationContextValue {
  const ctx = useContext(RegistrationContext);
  if (!ctx) {
    throw new Error(
      "useRegistration must be used within a RegistrationProvider",
    );
  }
  return ctx;
}
