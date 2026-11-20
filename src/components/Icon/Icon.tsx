import type { ReactNode } from "react";
import styles from "./Icon.module.scss";

const ICONS = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  download: <path d="M12 4v12M6 10l6 6 6-6M5 20h14" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  check: <path d="M5 12.5 10 17.5 19 7" />,
  warning: (
    <>
      <path d="M12 3 2 20h20L12 3z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  // label for icons that have meaning without text
  label?: string;
  className?: string;
};

export const Icon = ({ name, label, className }: IconProps) => {
  const allyProps = label ? { role: "img" as const, "aria-label": label } : { "aria-hidden": true as const };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      className={[styles.icon, className].filter(Boolean).join(" ")}
      {...allyProps}
    >
      {ICONS[name]}
    </svg>
  );
};
