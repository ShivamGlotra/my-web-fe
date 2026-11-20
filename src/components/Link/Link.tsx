import NextLink from "next/link";
import type { ReactNode } from "react";
import styles from "./Link.module.scss";
import { isWebUrl, isAppFile } from "../../lib/links";
import { Icon } from "@/components/Icon";

type LinkProps = {
  href: string;
  /** Open in a new tab with an external icon. Defaults to true for http(s) URLs. */
  external?: boolean;
  children: ReactNode;
  className?: string;
};

export const Link = ({ href, external, children, className }: LinkProps) => {
  const classes = [styles.link, className].filter(Boolean).join(" ");
  const opensInNewTab = external ?? isWebUrl(href);

  if (opensInNewTab) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <Icon name="arrowRight" className={styles.icon} />
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  if (isAppFile(href)) {
    return (
      <NextLink href={href} className={classes}>
        {children}
      </NextLink>
    );
  }

  // For mailto: and other non-http(s) links, we just use a normal anchor tag without the external icon.
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};
