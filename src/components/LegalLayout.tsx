import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Section = {
  heading?: string;
  content: React.ReactNode;
};

type LegalLayoutProps = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: Section[];
};

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalLayoutProps) {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-pine text-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-ivory/60 hover:text-gold text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-ivory/70 text-lg">{subtitle}</p>
          )}
          {lastUpdated && (
            <p className="mt-4 text-sm text-gold font-medium">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-pine/10 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-3 flex items-center gap-2 text-sm text-pine/50">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-pine font-medium">{title}</span>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose-legal">
            {sections.map((section, i) => (
              <div key={i} className="mb-10">
                {section.heading && (
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-pine mb-4 pb-2 border-b border-pine/10">
                    {section.heading}
                  </h2>
                )}
                <div className="text-pine/75 leading-relaxed space-y-4 text-[15px]">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#FFF4E6] py-12 border-t border-pine/10">
        <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-semibold text-pine">
              Questions about this policy?
            </p>
            <p className="text-pine/60 text-sm mt-1">
              Reach out to us and we'll be happy to clarify.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta text-white font-semibold px-6 py-3 text-sm hover:bg-terracotta-dark transition-colors shrink-0"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}