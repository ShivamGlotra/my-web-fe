import type { ReactNode } from "react";
import styles from "./Tag.module.scss";

type TagProps = {
  elementType?: "span" | "li";
  className?: string;
  children: ReactNode;
};

export const Tag = ({ elementType: Tag = "span", className, children }: TagProps) => {
  return <Tag className={[styles.list, className].filter(Boolean).join(" ")}>{children}</Tag>;
};

type TagListProps = {
  tags: string[];
  // label to define the list for screen readers, eg. "Technologies"
  label?: string;
  className?: string;
};

export const TagList = ({ tags, label, className }: TagListProps) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <ul className={[styles.list, className].filter(Boolean).join(" ")} aria-label={label}>
      {tags.map((tag) => (
        <Tag key={tag} elementType="li">
          {tag}
        </Tag>
      ))}
    </ul>
  );
};
