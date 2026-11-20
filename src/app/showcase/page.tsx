import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { TagList } from "@/components/Tag";
import { Badge } from "@/components/Badge";

export const metadata = { robots: { index: false } };

export default function ShowcasePage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main id="top">
      <Section>
        <ThemeToggle />
        <Heading level={1}>Component showcase</Heading>
      </Section>

      <Section id="headings" title="Headings" intro="Semantic level is separate from visual size.">
        <Heading level={3}>h3 at default size (md)</Heading>
        <Heading level={3} size="lg">
          h3 at size lg
        </Heading>
        <Heading level={4}>h4 at default size (sm)</Heading>
      </Section>

      <Section id="text" title="Text" intro="Sizes and muted combine freely." tinted>
        <Text size="lead">Lead: I&apos;m a third-year Computer Science student at York.</Text>
        <Text>Body: I build web and mobile apps with React, Next.js and Flutter.</Text>
        <Text muted>Body muted: Toronto, ON</Text>
        <Text size="small" muted>
          Small muted: © 2026 Shivam Glotra
        </Text>
        <Text>
          Inline: based in{" "}
          <Text element="span" muted>
            Toronto
          </Text>{" "}
          and open to new roles.
        </Text>
      </Section>

      <Section id="links" title="Links">
        <Text>
          Internal: <Link href="/">Home</Link>
        </Text>
        <Text>
          Section: <Link href="#top">Back to top</Link>
        </Text>
        <Text>
          External: <Link href="https://github.com/ShivamGlotra">GitHub</Link>
        </Text>
        <Text>
          File: <Link href="/cv.pdf">CV (PDF)</Link>
        </Text>
      </Section>

      <Section id="containers" title="Containers" tinted>
        <Text>The default container is 1200px. This text sits inside it.</Text>
      </Section>
      <Container size="narrow">
        <Text>
          This is the narrow container (720px), for long-form pages like Privacy. Lines stay at a comfortable reading
          length even on a wide screen.
        </Text>
      </Container>

      <Section id="buttons" title="Buttons" tinted>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Button href="#projects" iconEnd="arrowRight">
            View my work
          </Button>
          <Button href="/cv.pdf" variant="secondary" iconStart="download" download>
            Download CV
          </Button>
          <Button href="https://github.com/ShivamGlotra" variant="secondary">
            GitHub
          </Button>
          <Button size="sm">Small button</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Sending…</Button>
        </div>
      </Section>

      <Section id="cards" title="Cards, tags and badges">
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))" }}>
          <Card type="article">
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <Badge tone="success">In progress</Badge>
              <Heading level={3}>Weather Wise</Heading>
              <Text muted>A Flutter weather app with offline caching.</Text>
              <TagList label="Technologies" tags={["Flutter", "Dart", "REST APIs"]} />
              <Button href="/projects/weather-wise" size="sm" variant="secondary" iconEnd="arrowRight">
                View project
              </Button>
            </div>
          </Card>
          <Card padding="lg">
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <Badge tone="accent">Featured</Badge>
              <Badge>Neutral</Badge>
              <Text>Large padding card</Text>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="icons" title="Icons">
        <Text>
          <Icon name="mail" /> <Icon name="check" /> <Icon name="warning" /> <Icon name="menu" /> <Icon name="close" />{" "}
          <Icon name="sun" /> <Icon name="moon" /> <Icon name="monitor" />
        </Text>
      </Section>
    </main>
  );
}
