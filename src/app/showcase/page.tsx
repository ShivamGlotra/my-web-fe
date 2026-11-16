import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    </main>
  );
}
