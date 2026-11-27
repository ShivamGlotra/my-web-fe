import { PrincipalCard } from "@/components/HowIWork/PrincipleCard";
import styles from "./HowIWork.module.scss";
import { getPrinciples } from "@/lib/contentful";
import { Section } from "@/components/Section";

export const HowIWork = async () => {
  const principles = await getPrinciples();
  return (
    <Section
      id="how"
      tone="deep"
      eyebrow="How I work"
      title="What I bring to a development team"
      intro="Five habits from three developer roles and years of running a busy restaurant floor."
    >
      <ul className={styles.grid}>
        {principles.map((principle) => (
          <PrincipalCard key={principle.id} principle={principle} />
        ))}
      </ul>
    </Section>
  );
};
