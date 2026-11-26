import NextLink from "next/link";
import type { MouseEventHandler, ReactNode, Ref } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { isAppFile, isWebUrl } from "@/lib/links";
import styles from "./Button.module.scss";

type BaseProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  iconStart?: IconName;
  iconEnd?: IconName;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  download?: boolean;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  /** Access the real <button>, e.g. to move focus back to it. */
  ref?: Ref<HTMLButtonElement>;
  /** For buttons that show and hide something. */
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const VARIANT_CLASS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
} as const;

export const Button = (props: ButtonProps) => {
  const { variant = "primary", size = "md", iconStart, iconEnd, className, children } = props;

  const classes = ["btn", VARIANT_CLASS[variant], size === "sm" && "btn-sm", styles.button, className]
    .filter(Boolean)
    .join(" ");

  // ----- Link version -----
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

  // ----- Button version -----
  const {
    type = "button",
    onClick,
    disabled = false,
    loading = false,
    ref,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : iconStart && <Icon name={iconStart} />}
      <span>{children}</span>
      {!loading && iconEnd && <Icon name={iconEnd} />}
    </button>
  );
};
