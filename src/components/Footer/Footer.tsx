import { getSiteSettings } from "@/lib/contentful";
import styles from "./Footer.module.scss";
import { getCurrentYear } from "@/lib/date";
import { Container } from "@/components/Container";
import { Link } from "@/components/Link/Link";

export const Footer = async () => {
  const [site, year] = await Promise.all([getSiteSettings(), getCurrentYear()]);
  const { firstName, middleName, lastName } = site;
  const name = [firstName, middleName, lastName].filter(Boolean).join(" ");
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.copyright}>
          © {year} {name} · Designed & Developed {/* Designed & Built */}
        </p>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            <li>
              <Link href="/privacy" variant="plain">
                Privacy Policy
              </Link>
            </li>
            {site.socialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} variant="plain">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#top" variant="plain">
                Back to top
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};
