import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-pine text-ivory/85">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              {/* <div className="relative h-10 w-32 shrink-0 bg-ivory rounded-md p-1">
                <Image
                  src="https://abhyudayatrust.org/assets/img/logo/1.jpg"
                  alt="Abhyudaya Jan Kalyan Nyas logo"
                  fill
                  className="object-contain"
                />
              </div> */}
              <span className="font-display text-xl font-semibold text-ivory">
                Abhyudaya Jan Kalyan Nyas
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/70 max-w-sm">
              Empowering communities and transforming lives through
              education, healthcare and social welfare initiatives based in
              Gohana, Sonipat, Haryana.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-ivory/10 hover:bg-terracotta transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.4 0-1.8.8-1.8 1.7V12h3.1l-.5 2.9h-2.6v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-ivory/10 hover:bg-terracotta transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-7.1 8.1L23.3 22H16.7l-5.2-6.8L5.4 22H2.3l7.6-8.7L1.7 2h6.7l4.7 6.2L18.9 2Zm-2.5 18.2h1.7L8.7 3.7H6.9l9.5 16.5Z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-ivory/10 hover:bg-terracotta transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
          <FooterColumn
            title="Media &amp; Resources"
            links={footerLinks.mediaResources}
          />

          {/* Support + QR */}
          <div>
            <h3 className="font-display font-semibold text-ivory mb-4 tracking-wide">
              Supports
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  {link.href === "donate" ? (
                    <a
                      href={siteConfig.donateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold font-semibold hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-ivory/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="bg-ivory rounded-xl p-2 inline-block">
                <Image
                  src="https://abhyudayatrust.org/assets/img/pay.png"
                  alt="Scan to donate via UPI QR code"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ivory/60">
          <p>&copy; {new Date().getFullYear()} Abhyudaya Jan Kalyan Nyas. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display font-semibold text-ivory mb-4 tracking-wide">
        {title}
      </h3>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-ivory/70 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
