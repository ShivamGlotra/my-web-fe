/** Year and month, e.g. "2025-06". Formatted for display in the UI. */
export type YearMonth = `${number}-${string}`;

export type ImageAsset = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin";
};

// ---------- Site-wide ----------

export type SiteSettings = {
  firstName: string;
  middleName?: string;
  lastName: string;
  role: string;
  location: string;
  email: string;
  availability: { open: boolean; label: string };
  /** "Where I've worked and studied" row. */
  affiliations: string[];
  cvUrl: string;
  socialLinks: SocialLink[];
  footerTagline: string;
  seo: { title: string; description: string };
};

// ---------- Homepage sections ----------

// export type HeroStat = { value: string; label: string };

export type Hero = {
  eyebrow: string;
  headline: string;
  intro: string;
  /** Rendered in bold at the end of the intro. */
  question: string;
  photo?: ImageAsset;
};

export type Principle = {
  title: string;
  description: string;
  illustration?: ImageAsset;
};

export type AboutEntry = {
  /** Small label, e.g. "York University · 2023 – present". */
  label: string;
  title: string;
  body: string;
  photo?: ImageAsset;
  learnings?: { lead: string; text: string }[];
};

export type About = {
  lead: string;
  paragraphs: string[];
  timeline: AboutEntry[];
};
export type SkillGroup = {
  label: string;
  items: string[];
};

export type ProjectCategory = "web" | "mobile" | "desktop" | "ml";
export type ProjectStatus = "in-progress" | "completed";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** When it was finished. Omit while in progress. */
  date?: YearMonth;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Short fact shown on the card, e.g. "117 commits". */
  stat?: string;
  featured?: boolean;
  links?: { github?: string; live?: string };
  cover?: ImageAsset;
  /** Detail page only. */
  overview?: string;
  learned?: string[];
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: YearMonth;
  /** null means "present". */
  end: YearMonth | null;
  highlights: string[];
  stack: string[];
  /** "background" is the smaller card for non-developer roles. */
  kind: "developer" | "background";
};

type EducationBase = {
  id: string;
  title: string;
  institution: string;
};

export type Degree = EducationBase & {
  kind: "degree";
  location: string;
  start: YearMonth;
  end: YearMonth | null;
  gpa?: string;
  coursework: string[];
};

export type Certification = EducationBase & {
  kind: "certification";
  date: YearMonth;
  url?: string;
};

export type EducationItem = Degree | Certification;

export type ContactContent = {
  title: string;
  body: string;
};
