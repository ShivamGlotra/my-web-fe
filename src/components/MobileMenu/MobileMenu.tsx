"use client";

import { Link } from "@/components/Link";
import { useEffect, useState, useId, useRef } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { NavItem } from "@/lib/navigation";
import styles from "./MobileMenu.module.scss";
import { Button } from "@/components/Button";

export type ContactLink = {
  label: string;
  href: string;
  icon: IconName;
};

type MobileMenuProps = {
  navItems: NavItem[];
  contactLinks: ContactLink[];
};

export const MobileMenu = ({ navItems, contactLinks }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={styles.menu}>
      <Button
        ref={buttonRef}
        aria-controls={panelId}
        aria-expanded={open}
        size="sm"
        iconStart={open ? "close" : "menu"}
        onClick={() => setOpen((value) => !value)}
        variant="secondary"
      >
        {open ? "Close" : "Menu"}
      </Button>

      <div id={panelId} className={styles.panel} hidden={!open}>
        <nav aria-label="Main">
          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} variant="plain" onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.contacts}>
          {contactLinks.map((contact) => (
            <li key={contact.href}>
              <Link href={contact.href} variant="plain" onClick={close}>
                <Icon name={contact.icon} />
                {contact.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
