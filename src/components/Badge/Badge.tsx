import type { ReactNode } from "react";
import styles from "./Badge.module.scss";

type BadgeProps = {
  tone?: "neutral" | "accent" | "success";
  children: ReactNode;
  className?: string;
};

export const Badge = ({ tone = "neutral", children, className }: BadgeProps) => {
  const classes = [styles.badge, styles[tone], className].filter(Boolean).join(" ");

  return (
    <span className={classes}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  );
};
