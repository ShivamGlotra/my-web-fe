import NextLink from "next/link";
import { ReactNode } from "react";
import styles from "./Link.module.scss";

type LinkProps = {
  href: string;
  /** Open in a new tab with an external icon. Defaults to true for http(s) URLs. */
  external?: boolean;
  children: ReactNode;
  className?: string;
};

const isWebUrl = (href: string) => /^https?:\/\//i.test(href);

const isAppFile = (href: string) => {
  if (!href.startsWith("/") && !href.startsWith("#")) return false;
  const path = href.split(/[?#]/)[0];
  return !/\.[a-z0-9]+$/i.test(path);
};

export const Link = ({ href, external, children, className }: LinkProps) => {
  const classes = [styles.link, className].filter(Boolean).join(" ");
  const opensInNewTab = external ?? isWebUrl(href);

  if (opensInNewTab) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <ExternalIcon className={styles.icon} />
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

const ExternalIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
};
