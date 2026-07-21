import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

/** Standard page section: centered container + optional heading block. */
export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <header className={styles.head}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
