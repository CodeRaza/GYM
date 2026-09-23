"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/membership", label: "Membership", badge: "Offer" },
  { href: "/equipment", label: "Equipment" },
  { href: "/#training", label: "Training" },
  { href: "/#coach", label: "Coach" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="RI Fitness Club home" onClick={() => setOpen(false)}>
          <Image src="/media/ri-fitness-logo-transparent.webp" alt="RI Fitness Club" width={900} height={279} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} className={isActive ? "is-active" : undefined} aria-current={isActive ? "page" : undefined}>
                {link.label}
                {link.badge && (
                  <span
                    style={{
                      marginLeft: "6px",
                      fontSize: "0.66rem",
                      background: "var(--yellow)",
                      color: "var(--black)",
                      padding: "2px 6px",
                      borderRadius: "3px",
                      fontWeight: 900,
                      letterSpacing: "0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        <Link className="button button-small nav-cta" href="/membership">Join the Club</Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} className={isActive ? "is-active" : undefined} aria-current={isActive ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
                {link.badge && (
                  <span
                    style={{
                      marginLeft: "6px",
                      fontSize: "0.66rem",
                      background: "var(--yellow)",
                      color: "var(--black)",
                      padding: "2px 6px",
                      borderRadius: "3px",
                      fontWeight: 900,
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <Link className="button" href="/membership" onClick={() => setOpen(false)}>Join the Club</Link>
        </nav>
      )}
    </header>
  );
}
