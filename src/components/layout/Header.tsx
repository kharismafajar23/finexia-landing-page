"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import logoHeader from "@/assets/logo/logo-header.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const links: { label: string; href: string }[] = [
    { label: "Beranda", href: "#hero" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Use Case", href: "#use-case" },
    { label: "Insight", href: "#insight" },
    { label: "FAQ", href: "#faq" },
    { label: "Order", href: "#order" },
  ];

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Image
          src={logoHeader}
          alt="Logo"
          width={190}
          height={60}
          className="w-30 h-8 object-contain"
        ></Image>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === l.href.slice(1)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#order"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.62_0.21_25/0.5)] hover:bg-primary/90"
          >
            Hubungi Kami
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-3 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={handleNavClick}
                className={`text-sm font-medium ${
                  activeSection === l.href.slice(1)
                    ? "text-primary"
                    : ""
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={handleNavClick}
              className="mt-2 inline-flex w-full items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
