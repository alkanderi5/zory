import { forwardRef } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "light" | "ghost" | "outline";
type Size = "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  bling?: boolean;
  fullWidth?: boolean;
}

/** Shared button used across the hero, pricing, nav and registration flow. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      bling = false,
      fullWidth = false,
      className = "",
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={[
          styles.btn,
          styles[variant],
          styles[size],
          bling ? styles.bling : "",
          fullWidth ? styles.full : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
