"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pine/10 shadow-sm">
      {/* Top info bar */}
      <div className="hidden lg:block bg-pine text-white">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              {siteConfig.address}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail size={14} className="text-gold" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone size={14} className="text-gold" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/abhyudayalogo.png"
                alt="Abhyudaya Jan Kalyan Nyas logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="font-display font-semibold text-xl text-pine whitespace-nowrap">
                Abhyudaya
              </p>
              <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-terracotta whitespace-nowrap">
                Jan Kalyan Nyas
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9 font-medium">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors ${
                    isActive
                      ? "text-terracotta"
                      : "text-pine hover:text-terracotta"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-terracotta rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-terracotta text-ivory font-semibold px-6 py-3 text-sm tracking-wide hover:bg-terracotta-dark transition-colors shadow-sm"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-pine hover:bg-sand transition-colors"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-pine/10 bg-white">
          <nav className="flex flex-col px-6 py-4 gap-1 font-medium">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 transition-colors ${
                    isActive
                      ? "bg-sand text-terracotta"
                      : "text-pine hover:bg-sand/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-terracotta text-ivory font-semibold px-6 py-3 text-sm hover:bg-terracotta-dark transition-colors"
            >
              Donate Now
            </a>
            <div className="mt-4 flex flex-col gap-2 text-sm text-pine/70 border-t border-pine/10 pt-4">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
                <Mail size={14} className="text-terracotta" /> {siteConfig.email}
              </a>
              <a href={siteConfig.phoneHref} className="flex items-center gap-2">
                <Phone size={14} className="text-terracotta" /> {siteConfig.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-terracotta" /> {siteConfig.address}
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}