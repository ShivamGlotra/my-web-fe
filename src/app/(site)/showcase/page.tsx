import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { TagList } from "@/components/Tag";
import { Badge } from "@/components/Badge";
import { getEducation, getExperiences, getProjects } from "@/lib/contentful";
import { CATEGORY_LABELS, formatDateRange, formatYearMonth } from "@/lib/contentful/format";

export const metadata = { robots: { index: false } };

const ShowcasePage = async () => {
  if (process.env.NODE_ENV === "production") notFound();

  const [projects, experience, education] = await Promise.all([getProjects(), getExperiences(), getEducation()]);

  const counts = projects.reduce<Record<string, number>>((acc, project) => {
    acc[project.category] = (acc[project.category] ?? 0) + 1;
    return acc;
  }, {});

  return <div></div>;
};

export default ShowcasePage;
