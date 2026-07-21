import { COACHES } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { CoachCard } from "./CoachCard";
import styles from "./CoachesSection.module.css";

export function CoachesSection() {
  return (
    <Section
      id="coaches"
      title="Meet the coaches"
      subtitle="Certified, experienced, and loved by the kids they train."
    >
      <div className={styles.grid}>
        {COACHES.map((coach) => (
          <CoachCard key={coach.name} coach={coach} />
        ))}
      </div>
    </Section>
  );
}
