import { getProjects } from "@/lib/contentful";
import styles from "./Projects.module.scss";
import { PROJECT_GROUP, PROJECT_GROUP_ORDER, PROJECT_GROUP_LABEL } from "@/lib/format";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { ProjectCard } from "./ProjectCard";

export const FeaturedProjects = async () => {
  const projects = await getProjects();
  const featuredProjects = projects.filter((project) => project.featured);

  const groups = PROJECT_GROUP_ORDER.map((group) => ({
    group: group,
    projects: featuredProjects.filter((project) => PROJECT_GROUP[project.category] === group),
  })).filter((entry) => entry.projects.length > 0);

  if (groups.length === 0) return null;

  return (
    <Section id="work" className={styles.section} title="Featured Projects" tone="band">
      {groups.map(({ group, projects: groupProjects }) => {
        const labelId = `projects-${group}`;

        return (
          <div key={group} className={styles.group}>
            <Text size="label" accent id={labelId} className={styles.groupLabel}>
              {PROJECT_GROUP_LABEL[group]}
            </Text>
            <ul className={styles.grid} aria-labelledby={labelId}>
              {groupProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </div>
        );
      })}
    </Section>
  );
};
