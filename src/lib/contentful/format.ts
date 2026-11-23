import type { ProjectCategory, ProjectStatus, YearMonth } from "@/types/content";

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: "Web app",
  mobile: "Mobile app",
  desktop: "Desktop app",
  ml: "Data and Machine Learning",
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  "in-progress": "In progress",
  completed: "Completed",
};

const monthYear = new Intl.DateTimeFormat("en-CA", { month: "long", year: "numeric", timeZone: "UTC" });

// "January 2023" -> "2023-01"
export const formatYearMonth = (value: YearMonth): string => {
  const [year, month] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));
  return monthYear.format(date);
};

// "2023-01" -> "January 2023"
export const formatDateRange = (start: YearMonth, end: YearMonth | null): string => {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : "present"}`;
};
