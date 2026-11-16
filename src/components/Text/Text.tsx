import type { ReactNode } from "react";
import styles from "./Text.module.scss";

type elementType = "p" | "span" | "div" | "li";
type TextSize = "lead" | "body" | "small";

type TextProps = {
  element?: elementType; // type of the text element (p, span, div, li)
  size?: TextSize; // size of the text (lead, body, small)
  muted?: boolean; // whether the text is muted or not
  id?: string;
  className?: string;
  children: ReactNode;
};

export const Text = ({ element: Tag = "p", size = "body", muted = false, id, className, children }: TextProps) => {
  const classes = [styles.text, styles[size], muted && styles.muted, className].filter(Boolean).join(" ");

  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
};
