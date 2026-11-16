import { notFound } from "next/navigation";
import { Heading } from "@/components/Heading";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Text } from "@/components/Text";
import { Link } from "@/components/Link";

export const metadata = { robots: { index: false } };

export default function ShowcasePage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main style={{ padding: "2rem", display: "grid", gap: "1.5rem" }}>
      <ThemeToggle />

      <Heading level={1}>Shivam Glotra (h1, display)</Heading>
      <Heading level={2}>About me (h2, xl)</Heading>
      <Heading level={2} size="lg">
        Smaller section title (h2, lg)
      </Heading>
      <Heading level={3}>Weather Wise (h3, md)</Heading>
      <Heading level={4}>Card detail (h4, sm)</Heading>
      <Heading level={2} size="sm" id="footer-links">
        Quick links (h2, sm: small but semantically h2)
      </Heading>
      <Heading level={2}>
        A long heading that wraps across two lines to show how text-wrap balance evens out the lines
      </Heading>
      <hr />

      <Text size="lead">Lead: I&apos;m a third-year Computer Science student at York University.</Text>
      <Text>Body: I build web and mobile apps with React, Next.js and Flutter.</Text>
      <Text muted>Body muted: Toronto, ON</Text>
      <Text size="small">Small: 2023 to present</Text>
      <Text size="small" muted>
        Small muted: © 2026 Shivam Glotra
      </Text>

      <Text>
        Inline usage: Based in{" "}
        <Text element="span" muted>
          Toronto, ON
        </Text>{" "}
        and open to new roles.
      </Text>
      <hr />

      <Text>
        Internal: <Link href="/">Back to home</Link>
      </Text>
      <Text>
        Section: <Link href="#top">Jump to top</Link>
      </Text>
      <Text>
        External: <Link href="https://github.com/ShivamGlotra">GitHub</Link>
      </Text>
      <Text>
        Email: <Link href="mailto:you@example.com">Email me</Link>
      </Text>
      <Text>
        File: <Link href="/cv.pdf">My CV (PDF)</Link>
      </Text>
      <Text size="small" muted>
        Inside small muted text: <Link href="/">a link</Link>
      </Text>
    </main>
  );
}
