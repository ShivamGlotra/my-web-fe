import { AboutEntry } from "@/types/content";
import styles from "./AboutTimeline.module.scss";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";
import { TimelinePhoto } from "@/components/About/TimelinePhoto";

type AboutTimelineProps = {
  timeline: AboutEntry[];
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const AboutTimeline = ({ timeline }: AboutTimelineProps) => {
  return (
    <ol className={styles.timeline}>
      {timeline.map((entry) => {
        const learningsId = `learning-${slugify(entry.title)}`;

        return (
          <li key={entry.id} className={styles.entry}>
            <TimelinePhoto photo={entry.photo} />

            <div className={styles.body}>
              <Text size="label" accent>
                {entry.label}
              </Text>
              <Heading level={3} size="md">
                {entry.title}
              </Heading>
              <Text muted>{entry.body}</Text>

              {entry.learnings && entry.learnings.length > 0 && (
                <div className={styles.learnings}>
                  <Text size="label" accent id={learningsId}>
                    What I keep learning
                  </Text>
                  <ul aria-labelledby={learningsId}>
                    {entry.learnings.map((item, index) => (
                      <li key={index}>
                        <strong>{item.lead}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};
