import NextLink from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Link.module.scss";
import { isWebUrl, isAppFile } from "../../lib/links";
import { Icon } from "@/components/Icon";

type LinkProps = {
  href: string;
  // Open in a new tab with an external icon.
  external?: boolean;
  // For links that open in a new tab, show an external icon ↗.
  externalIcon?: boolean;
  /** The visual style of the link. */
  variant?: "inline" | "arrow" | "plain";
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const Link = ({
  href,
  external,
  variant = "inline",
  onClick,
  externalIcon = true,
  children,
  className,
}: LinkProps) => {
  const classes = [styles.link, styles[variant], className].filter(Boolean).join(" ");
  const opensInNewTab = external ?? isWebUrl(href);

  if (opensInNewTab) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
        {externalIcon && <Icon name="arrowRight" className={styles.icon} />}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }
  const content = (
    <>
      {children}
      {variant === "arrow" && <Icon name="arrowRight" className={styles.icon} />}
    </>
  );

  if (isAppFile(href)) {
    return (
      <NextLink href={href} className={classes} onClick={onClick}>
        {children}
      </NextLink>
    );
  }

  // For mailto: and other non-http(s) links, we just use a normal anchor tag without the external icon.
  return (
    <a href={href} className={classes} onClick={onClick}>
      {content}
    </a>
  );
};
