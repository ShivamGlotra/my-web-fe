import { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import styles from "./Section.module.scss";

type BaseSectionProps = {
  // A secondary bg to separate the sections
  tinted?: boolean;
  className?: string;
  children?: ReactNode;
};

type WithTitleProps = BaseSectionProps & {
  title: string;
  // Rquired with a title, for anchor links and aria-labels
  id: string;
  intro?: ReactNode;
};

type WithoutTitleProps = BaseSectionProps & {
  title?: undefined;
  id?: string;
  intro?: undefined;
};

type SectionProps = WithTitleProps | WithoutTitleProps;

export const Section = ({ id, title, intro, tinted = false, className, children }: SectionProps) => {
  const headingId = title ? `${id}-heading` : undefined;
  const classes = [styles.section, tinted && styles.tinted, className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes} aria-labelledby={headingId}>
      <Container>
        {title && (
          <header className={styles.header}>
            <Heading level={2} id={headingId}>
              {title}
            </Heading>
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
