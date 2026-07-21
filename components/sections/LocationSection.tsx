import { LOCATION } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import styles from "./LocationSection.module.css";

export function LocationSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.info}>
            <p className={styles.eyebrow}>📍 Our location</p>
            <h2 className={styles.title}>{LOCATION.area}</h2>
            <p className={styles.blurb}>{LOCATION.blurb}</p>
            <a href={LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Open in Google Maps
              </Button>
            </a>
          </div>

          <a
            className={styles.map}
            href={LOCATION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ZORY Swim School location in Google Maps"
          >
            <span className={styles.pin} aria-hidden="true">
              📍
            </span>
            <span className={styles.mapLabel}>Oxygen Club · Sabah Al Salem</span>
          </a>
        </div>
      </div>
    </section>
  );
}
