import { getProjects, getSiteSettings } from "@/lib/contentful";
import styles from "./Projects.module.scss";
import { Section } from "@/components/Section/Section";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import Link from "next/link";

export const MoreProjects = async () => {
  const [projects, site] = await Promise.all([getProjects(), getSiteSettings()]);
  const moreProjects = projects.filter((project) => !project.featured);
  const github = site.socialLinks?.find((link) => link.icon === "github");

  if (moreProjects.length === 0) return null;

  return (
    <Section
      id="more-projects"
      tone="band"
      title="More projects"
      intro={
        <>
          Smaller apps and earlier builds, from mobile to desktop.{" "}
          {github && <Link href={github.href}>All repositories on GitHub</Link>}
        </>
      }
    >
      <ul className={styles.grid}>
        {moreProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="compact" />
        ))}
      </ul>
    </Section>
  );
};
