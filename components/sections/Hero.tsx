import { PROGRAM, REVIEWS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Stars } from "@/components/ui/Stars";
import { RegisterButton } from "@/components/registration/RegisterButton";
import { ReviewCard } from "./ReviewCard";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Badge tone="brand" dot>
            {PROGRAM.title}
          </Badge>
          <h1 className={styles.title}>
            A great summer starts in the water
          </h1>
          <p className={styles.lead}>
            Register your children for two weeks of coached swimming. Small
            groups, sorted by age, with three daily sessions to fit your
            schedule.
          </p>
          <div className={styles.cta}>
            <RegisterButton size="lg" bling>
              Register your kids
            </RegisterButton>
            <p className={styles.fineprint}>
              From {PROGRAM.pricePerChild.toFixed(3)} {PROGRAM.currency} per
              child · Family discounts up to 15%
            </p>
          </div>
        </div>

        <aside className={styles.panel} aria-label="Parent reviews">
          <div className={styles.panelHead}>
            <Stars rating={5} size={16} />
            <span>Trusted by 400+ Kuwaiti families</span>
          </div>
          <div className={styles.reviews}>
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
