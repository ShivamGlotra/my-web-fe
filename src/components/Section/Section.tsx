import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import styles from "./Section.module.scss";

type BaseSectionProps = {
  // A secondary bg to separate the sections
  // tinted?: boolean;
  tone?: "plain" | "band" | "deep";
  className?: string;
  children?: ReactNode;
};

type WithTitleProps = BaseSectionProps & {
  title: string;
  // Rquired with a title, for anchor links and aria-labels
  id: string;
  // Small label above the title, for example "About me" or "Projects"
  eyebrow?: string;
  intro?: ReactNode;
};

type WithoutTitleProps = BaseSectionProps & {
  title?: undefined;
  id?: string;
  eyebrow?: undefined;
  intro?: undefined;
};

type SectionProps = WithTitleProps | WithoutTitleProps;

export const Section = ({ id, title, intro, tone = "deep", eyebrow, className, children }: SectionProps) => {
  const headingId = title ? `${id}-heading` : undefined;
  const classes = [styles.section, styles[tone], className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes} aria-labelledby={headingId}>
      <Container>
        {title && (
          <header className={styles.header}>
            <hgroup className={styles.titleGroup}>
              {eyebrow && (
                <Text size="label" accent>
                  {eyebrow}
                </Text>
              )}
              <Heading level={2} id={headingId}>
                {title}
              </Heading>
            </hgroup>
            {intro && (
              <Text size="lead" muted>
                {" "}
                {intro}
              </Text>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};
