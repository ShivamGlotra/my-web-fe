import type { ProjectCategory, ProjectStatus, YearMonth, Project } from "@/types/content";

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

export type ProjectGroup = "fullstack" | "other";

export const PROJECT_GROUP: Record<ProjectCategory, ProjectGroup> = {
  web: "fullstack",
  mobile: "fullstack",
  desktop: "other",
  ml: "other",
};

export const PROJECT_GROUP_LABEL: Record<ProjectGroup, string> = {
  fullstack: "Full-stack web and mobile",
  other: "Data, desktop and AI",
};

/** ("2025-06", "2026-04") → "10 months". Finished roles only. */
export const formatDuration = (start: YearMonth, end: YearMonth): string => {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  const months = (ey - sy) * 12 + (em - sm);
  if (months < 12) return `${months} ${months === 1 ? "month" : "months"}`;
  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? "year" : "years"}`;
};

export const PROJECT_GROUP_ORDER: ProjectGroup[] = ["fullstack", "other"];

export const formatProjectMeta = (project: Project): string => {
  const when =
    project.status === "completed" && project.date ? formatYearMonth(project.date) : STATUS_LABELS[project.status];

  return [CATEGORY_LABELS[project.category], when, project.stat].filter(Boolean).join(" · ");
};
