import type { ReactNode } from "react";
import styles from "./Badge.module.scss";

type BadgeProps = {
  tone?: "neutral" | "accent" | "success";
  children: ReactNode;
  className?: string;
};

export const Badge = ({ tone = "neutral", children, className }: BadgeProps) => {
  return <span className={[styles.badge, styles[tone], className].filter(Boolean).join(" ")}>{children}</span>;
};
