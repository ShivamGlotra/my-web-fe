"use client";

import { useSyncExternalStore } from "react";
import {
  type ThemePreferences,
  getStoredThemePreference,
  subscribeToThemeChanges,
  setThemePreference,
} from "@/lib/theme";
import styles from "./ThemeToggle.module.scss";

const NEXT: Record<ThemePreferences, ThemePreferences> = {
  light: "dark",
  dark: "light",
  system: "light",
};

const LABELS: Record<ThemePreferences, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

export const ThemeToggle = () => {
  const themePreference = useSyncExternalStore(subscribeToThemeChanges, getStoredThemePreference, () => null);

  const label = themePreference
    ? `Theme: ${LABELS[themePreference]}. Switch to ${NEXT[themePreference]}`
    : "Change Theme";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setThemePreference(NEXT[themePreference ?? "system"])}
      aria-label={label}
      title={label}
    >
      <SunIcon className={`${styles.icon} ${styles.light}`} />
      <MoonIcon className={`${styles.icon} ${styles.dark}`} />
      <MonitorIcon className={`${styles.icon} ${styles.system}`} />{" "}
    </button>
  );
};

// To be removed later
type IconProps = {
  className?: string;
};
const svgProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

const SunIcon = ({ className }: IconProps) => {
  return (
    <svg {...svgProps} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
};

const MoonIcon = ({ className }: IconProps) => {
  return (
    <svg {...svgProps} className={className}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
};

const MonitorIcon = ({ className }: IconProps) => {
  return (
    <svg {...svgProps} className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
};
