import { Section } from "@/components/Section";
import { getAbout, getSkillGroups } from "@/lib/contentful";
import styles from "./About.module.scss";
import { Text } from "@/components/Text";
import { AboutTimeline } from "@/components/About/AboutTimeline";
import { Toolkit } from "@/components/About/Toolkit";

export const About = async () => {
  const [about, skillGroups] = await Promise.all([getAbout(), getSkillGroups()]);

  return (
    <Section id="about" title="About" tone="deep">
      <div className={styles.intro}>
        <Text size="lead">{about.lead}</Text>
        {about.paragraphs.map((paragraph) => (
          <Text key={paragraph} muted>
            {paragraph}
          </Text>
        ))}
      </div>

      <AboutTimeline timeline={about.timeline} />
      <Toolkit groups={skillGroups} />
    </Section>
  );
};
