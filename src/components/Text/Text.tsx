import type { ReactNode } from "react";
import styles from "./Text.module.scss";

type elementType = "p" | "span" | "div" | "li";
type TextSize = "lead" | "body" | "small" | "label";

type TextProps = {
  element?: elementType; // type of the text element (p, span, div, li)
  size?: TextSize; // size of the text (lead, body, small)
  muted?: boolean; // whether the text is muted or not
  id?: string;
  accent?: boolean; // for labels above headings
  className?: string;
  children: ReactNode;
};

export const Text = ({
  element: Tag = "p",
  size = "body",
  muted = false,
  accent = false,
  id,
  className,
  children,
}: TextProps) => {
  const classes = [styles.text, styles[size], muted && styles.muted, accent && styles.accent, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
};
