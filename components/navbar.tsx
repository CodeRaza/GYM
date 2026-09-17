"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/#training", label: "Training" },
  { href: "/#experience", label: "Experience" },
  { href: "/#coach", label: "Coach" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="RI Fitness Club home" onClick={() => setOpen(false)}>
          <Image src="/media/ri-fitness-logo-transparent.webp" alt="RI Fitness Club" width={900} height={279} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
        <Link className="button button-small nav-cta" href="/contact#contact-form">Join the Club</Link>
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
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link className="button" href="/contact#contact-form" onClick={() => setOpen(false)}>Join the Club</Link>
        </nav>
      )}
    </header>
  );
}
