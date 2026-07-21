import { DISCOUNT_TIERS, PROGRAM } from "@/lib/data";
import { RegisterButton } from "@/components/registration/RegisterButton";
import styles from "./PricingSection.module.css";

export function PricingSection() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.orb} aria-hidden="true" />
          <div className={styles.content}>
            <h2 className={styles.title}>Simple family pricing</h2>
            <p className={styles.lead}>
              {PROGRAM.pricePerChild.toFixed(3)} {PROGRAM.currency} per child.
              The more kids you register, the more you save.
            </p>

            <ul className={styles.tiers}>
              {DISCOUNT_TIERS.map((tier) => (
                <li
                  key={tier.label}
                  className={`${styles.tier} ${tier.highlight ? styles.highlight : ""}`}
                >
                  <span className={styles.tierLabel}>{tier.label}</span>
                  <span className={styles.tierValue}>{tier.value}</span>
                </li>
              ))}
            </ul>

            <RegisterButton variant="light" size="md">
              Register your kids
            </RegisterButton>
          </div>
        </div>
      </div>
    </section>
  );
}
