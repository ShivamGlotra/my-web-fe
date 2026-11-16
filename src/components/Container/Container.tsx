import { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  // Size for the container | In our case its 1200px default content width and 720px for narrow content width
  size?: "default" | "narrow";
  className?: string;
  children: ReactNode;
};

export const Container = ({ size = "default", className, children }: ContainerProps) => {
  const classes = [styles.container, size === "narrow" && styles.narrow, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};
