import styles from "./ProjectCard.module.scss";
import { Project } from "@/types/content";
import { MediaFrame } from "@/components/MediaFrame";
import { Text } from "@/components/Text";
import { formatProjectMeta } from "@/lib/format";
import { Heading } from "@/components/Heading";
import { TagList } from "@/components/Tag/Tag";
import { Link } from "@/components/Link";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact";
};

export const ProjectCard = ({ project, variant = "featured" }: ProjectCardProps) => {
  const isFeatured = variant === "featured";
  const github = project.links?.github;
  const isLive = project.links?.live;

  return (
    <li className={[styles.card, styles[variant]].join(" ")}>
      <MediaFrame
        image={project.cover}
        ratio={isFeatured ? "16 / 9" : "16 / 10"}
        sizes="(min-width: 48rem) 50vw, 100vw"
        className={styles.media}
      />
      {isFeatured && (
        <Text size="label" muted>
          {formatProjectMeta(project)}
        </Text>
      )}

      <Heading level={3} size={isFeatured ? "lg" : "md"}>
        {project.title}
      </Heading>

      <Text muted size={isFeatured ? "body" : "small"} className={styles.summary}>
        {project.summary}
      </Text>

      {isFeatured && <TagList label="Technologies" tags={project.stack} />}

      <div className={styles.links}>
        {isLive && (
          <Link href={`/projects/${project.slug}`} variant="plain">
            View project
            <span className="visually-hidden">{project.title}</span>
          </Link>
        )}
        {isFeatured && github && (
          <Link href={github} variant="arrow">
            GitHub<span className="visually-hidden">: {project.title}</span>
          </Link>
        )}
      </div>
    </li>
  );
};
