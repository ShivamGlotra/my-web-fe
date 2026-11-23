import "server-only";
import type {
  About,
  ContactContent,
  EducationItem,
  Experience,
  Hero,
  Project,
  SiteSettings,
  SkillGroup,
} from "@/types/content";

import * as data from "./placeholder-data";

export async function getSiteSettings(): Promise<SiteSettings> {
  return data.siteSettings;
}

export async function getHero(): Promise<Hero> {
  return data.hero;
}

export async function getAbout(): Promise<About> {
  return data.about;
}

export async function getSkillGroups(): Promise<SkillGroup[]> {
  return data.skillGroups;
}

export async function getProjects(): Promise<Project[]> {
  return data.projects;
}

export async function getExperience(): Promise<Experience[]> {
  return data.experience;
}

export async function getEducation(): Promise<EducationItem[]> {
  return data.education;
}

export async function getContactContent(): Promise<ContactContent> {
  return data.contact;
}
