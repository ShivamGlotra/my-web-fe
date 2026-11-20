// Passing href would turn the button into a link and not passing it would make it a normal button.
// This is useful for buttons that are used to navigate to other pages.

import NextLink from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { Icon, type IconName } from "../Icon";
import { isWebUrl, isAppFile } from "@/lib/links";
import styles from "./Button.module.scss";

type BaseProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  iconStart?: IconName;
  iconEnd?: IconName;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = BaseProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
};

type ButtonAsLinkProps = BaseProps & {
  href: string;
  external?: boolean;
  download?: boolean;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const VARIANT_CLASSES = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
};

export const Button = (props: ButtonProps) => {
  const { variant = "primary", size = "md", iconStart, iconEnd, className, children } = props;

  const classes = ["btn", VARIANT_CLASSES[variant], size === "sm" && "btn-sm", styles.button, className]
    .filter(Boolean)
    .join(" ");

  if (typeof props.href === "string") {
    if (props.href.trim() === "") {
      throw new Error("Button href cannot be empty string");
    }
    const { href, external, download } = props;
    const content = (
      <>
        {iconStart && <Icon name={iconStart} />}
        <span>{children}</span>
        {iconEnd && <Icon name={iconEnd} />}
      </>
    );
    if (external ?? isWebUrl(href)) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      );
    }

    if (isAppFile(href) && !download) {
      return (
        <NextLink href={href} className={classes}>
          {content}
        </NextLink>
      );
    }
    return (
      <a href={href} className={classes} download={download || undefined}>
        {content}
      </a>
    );
  }

  const { type = "button", onClick, disabled = false, loading = false } = props;

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} aria-busy={loading} className={classes}>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : iconStart && <Icon name={iconStart} />}
      <span>{children}</span>
      {!loading && iconEnd && <Icon name={iconEnd} />}
    </button>
  );
};
