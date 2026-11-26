import { getSiteSettings } from "@/lib/contentful";
import { MobileMenu, type ContactLink } from "@/components/MobileMenu";
import styles from "./Header.module.scss";
import { Container } from "@/components/Container";
import { Link } from "@/components/Link";
import { NAV_ITEMS } from "@/lib/navigation";
import { Icon } from "@/components/Icon/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = async () => {
  const site = await getSiteSettings();

  const { firstName, middleName, lastName } = site;

  const contacts: ContactLink[] = [
    { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
    ...site.socialLinks.map((link) => ({ label: link.label, href: link.href, icon: link.icon })),
  ];

  return (
    <header id="top" className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" variant="plain" className={styles.brand}>
          {firstName} {middleName && `${middleName} `} <em>{lastName}</em>
        </Link>

        <nav aria-label="Main" className={styles.nav}>
          <ul>
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.href}>
                <Link href={navItem.href} variant="plain">
                  {navItem.label}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ul className={styles.contacts}>
            {contacts.map((contact) => (
              <li key={contact.href}>
                <Link href={contact.href} variant="plain" externalIcon={false}>
                  <Icon name={contact.icon} />
                  <span>{contact.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileMenu navItems={NAV_ITEMS} contactLinks={contacts} />
        </div>
      </Container>
    </header>
  );
};
