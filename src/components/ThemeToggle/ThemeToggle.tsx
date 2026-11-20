"use client";
import { useSyncExternalStore } from "react";
import {
  type ThemePreferences,
  getStoredThemePreference,
  subscribeToThemeChanges,
  setThemePreference,
} from "@/lib/theme";
import styles from "./ThemeToggle.module.scss";
import { Icon } from "@/components/Icon";

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
      <Icon name="sun" className={`${styles.icon} ${styles.light}`} />
      <Icon name="moon" className={`${styles.icon} ${styles.dark}`} />
      <Icon name="monitor" className={`${styles.icon} ${styles.system}`} />
    </button>
  );
};
