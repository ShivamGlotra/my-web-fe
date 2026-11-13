export type ThemePreferences = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";
const CHANGE_EVENT = "themechange";

const isThemePreference = (value: unknown): value is ThemePreferences => {
  return value === "light" || value === "dark" || value === "system";
};

// First read the saved preference from localStorage and fall back to system preference if none is founde
export const getStoredThemePreference = (): ThemePreferences => {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(value) ? value : "system";
  } catch {
    // localStoage can throw (blocked storage, icognito mode, etc.), so we default to system preference if we can't read it
    return "system";
  }
};

// If the user has a saved preference, we use that. Otherwise, we use the system preference.
export const resolveTheme = (preference: ThemePreferences): ResolvedTheme => {
  if (preference !== "system") return preference;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
};

// apply the theme by putting it on <html>. CSS does the rest.
export const applyTheme = (preference: ThemePreferences): void => {
  const root = document.documentElement;
  const resolvedTheme = resolveTheme(preference);
  root.setAttribute("data-bs-theme", resolvedTheme);
  root.setAttribute("data-theme-preference", preference);
};

// Save a new Choice, apply it and tell any listeners that the theme has changed.
export const setThemePreference = (preference: ThemePreferences): void => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // localStoage can throw (blocked storage, icognito mode, etc.), so we ignore it if we can't write to it
  }
  applyTheme(preference);
  window.dispatchEvent(new Event(CHANGE_EVENT));
  //   window.dispatchEvent(
  //     new CustomEvent(CHANGE_EVENT, { detail: resolveTheme(preference) }),
  //   );
};

// Listen for changes to the system preference and the stored preference and call the provided callback when either changes.
// If a user changed the preference in another tab, we will get a storage event. If the system preference changes,
// we will get a media query change event.
export const subscribeToThemeChanges = (onChange: () => void): (() => void) => {
  const media = window.matchMedia(DARK_QUERY);

  const handleMediaChange = () => {
    if (getStoredThemePreference() === "system") applyTheme("system");
    onChange();
  };

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    applyTheme(getStoredThemePreference());
    onChange();
  };

  media.addEventListener("change", handleMediaChange);
  window.addEventListener("storage", handleStorageChange);
  window.addEventListener(CHANGE_EVENT, onChange);

  return () => {
    media.removeEventListener("change", handleMediaChange);
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
};

// A script that runs on page load to apply the theme as soon as possible.
// This is important for preventing a flash of the wrong theme on page load.
// Must be called before the first render of the app, so it should be called in a <script> tag in the <head> of the document.
export const themeScript = `
(function() {
var preference = "system";
try {
  var saved = localStorage.getItem("${THEME_STORAGE_KEY}");
  if (saved === "light" || saved === "dark") {
    preference = saved;
  }
} catch {e}
var dark = preference === "dark" || (preference === "system" && window.matchMedia("${DARK_QUERY}").matches);
var root = document.documentElement;
root.setAttribute("data-bs-theme", dark ? "dark" : "light");
root.setAttribute("data-theme-preference", preference);
})();
`;
