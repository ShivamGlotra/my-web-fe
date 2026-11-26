import { HeroPhoto } from "@/components/Hero/HeroPhoto";
import { Affiliations } from "@/components/Hero/Affiliations";
import { getHero, getSiteSettings } from "@/lib/contentful";
import styles from "./Hero.module.scss";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Link } from "@/components/Link";

export const Hero = async () => {
  const [hero, site] = await Promise.all([getHero(), getSiteSettings()]);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <hgroup className={styles.titleGroup}>
              <Text size="label" accent>
                {hero.eyebrow}
              </Text>
              <Heading level={1} id="hero-heading">
                {hero.headline}
              </Heading>
            </hgroup>

            <Text size="lead" className={styles.intro}>
              {hero.intro} <strong>{hero.question}</strong>
            </Text>

            <div className={styles.actions}>
              <Button href="#work">View projects</Button>
              <Button href="#contact" variant="secondary">
                Get in touch
              </Button>
              <Link href={site.cvUrl} external>
                Resume (PDF)
              </Link>
            </div>

            {site.availability.open && (
              <Text size="small" className={styles.availability}>
                <span className={styles.dot} aria-hidden="true" />
                {site.availability.label}
              </Text>
            )}
          </div>

          <div className={styles.media}>
            <HeroPhoto photo={hero.photo} name={site.firstName} location={site.location} />
          </div>
        </div>

        <Affiliations items={site.affiliations} />
      </Container>
    </section>
  );
};
