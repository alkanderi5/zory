"use client";

import { Button } from "@/components/ui/Button";
import { useRegistration } from "./RegistrationContext";

interface RegisterButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "light" | "ghost" | "outline";
  size?: "md" | "lg";
  bling?: boolean;
  className?: string;
}

/** CTA that opens the shared registration modal from anywhere on the page. */
export function RegisterButton({
  children,
  variant = "primary",
  size = "md",
  bling,
  className,
}: RegisterButtonProps) {
  const { open } = useRegistration();
  return (
    <Button
      variant={variant}
      size={size}
      bling={bling}
      className={className}
      onClick={open}
    >
      {children}
    </Button>
  );
}
