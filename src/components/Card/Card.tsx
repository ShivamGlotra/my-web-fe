import type { ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  type?: "div" | "li" | "article";
  padding?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
};

export const Card = ({ type: Tag = "div", padding = "md", className, children }: CardProps) => {
  const classes = [styles.card, padding === "lg" && styles.lg, className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
};
