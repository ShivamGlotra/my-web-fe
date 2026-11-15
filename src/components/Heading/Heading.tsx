import type { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = "display" | "xl" | "lg" | "md" | "sm";

const DEfAULT_HEADING_SIZE: Record<HeadingLevel, HeadingSize> = {
  1: "display",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "sm",
};

type HHeadingProps = {
  level: HeadingLevel; // level of the heading (1-6)
  size?: HeadingSize;
  id?: string; // optional id for the heading needed for anchor links
  className?: string; // optional className for the heading
  children: ReactNode;
};

export const Heading = ({ level, size = DEfAULT_HEADING_SIZE[level], id, className, children }: HHeadingProps) => {
  const HeadingTag = `h${level}` as const;
  const classes = [styles.heading, styles[size], className].filter(Boolean).join(" ");

  return (
    <HeadingTag id={id} className={classes}>
      {children}
    </HeadingTag>
  );
};
