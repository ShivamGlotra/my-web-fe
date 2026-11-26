import { Text } from "@/components/Text";
import styles from "./Affiliations.module.scss";

type AffiliationProps = {
  items: string[];
};

export const Affiliations = ({ items }: AffiliationProps) => {
  if (items.length === 0) return null;

  return (
    <div className={styles.affiliations}>
      <Text size="label" muted id="affiliations-label">
        Where I&apos;ve Worked and studied
      </Text>
      <ul aria-labelledby="affiliations-label" className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
