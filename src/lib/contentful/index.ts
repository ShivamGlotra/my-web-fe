import "server-only";
import type {
  About,
  ContactContent,
  EducationItem,
  Experience,
  Hero,
  Principle,
  Project,
  SiteSettings,
  SkillGroup,
} from "@/types/content";

import * as data from "./placeholder-data";

export const getSiteSettings = async (): Promise<SiteSettings> => {
  return data.siteSettings;
};

export const getHero = async (): Promise<Hero> => {
  return data.hero;
};

export const getAbout = async (): Promise<About> => {
  return data.about;
};

export const getSkillGroups = async (): Promise<SkillGroup[]> => {
  return data.skillGroups;
};

export const getProjects = async (): Promise<Project[]> => {
  return data.projects;
};

export const getExperiences = async (): Promise<Experience[]> => {
  return data.experience;
};

export const getEducation = async (): Promise<EducationItem[]> => {
  return data.education;
};

export const getContactContent = async (): Promise<ContactContent> => {
  return data.contact;
};
export const getPrinciples = async (): Promise<Principle[]> => {
  return data.principles;
};
