import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Heart } from "lucide-react";
import ThreadEyebrow from "@/components/ThreadEyebrow";
import { initiatives, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Our Initiatives | Abhyudaya Jan Kalyan Nyas",
  description:
    "Explore the healthcare, education and community welfare initiatives run by Abhyudaya Jan Kalyan Nyas in Sonipat, Haryana.",
};

export default function InitiativesPage() {
  return (
    <>
      <section className="bg-pine text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Our Initiatives
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-ivory/70">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold">Our Initiatives</span>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ThreadEyebrow label="Transforming Lives" align="center" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Eight projects, one shared mission
            </h2>
            <p className="mt-4 text-pine/70 leading-relaxed">
              Each initiative addresses a specific community need — from
              eye-care and dentures to scholarships and de-addiction —
              grounded in the same commitment to dignity and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group grid sm:grid-cols-[160px_1fr] gap-5 rounded-2xl bg-white border border-pine/5 shadow-sm hover:shadow-lg transition-shadow overflow-hidden p-5"
              >
                <div className="relative h-44 sm:h-full rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 font-data text-xs font-bold text-ivory bg-terracotta rounded-full px-3 py-1">
                    {item.number}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug mb-2 group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-pine/65 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE BANNER */}
      <section className="bg-terracotta text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Help us reach more communities
            </h2>
            <p className="mt-2 text-ivory/85">
              Every contribution funds spectacles, surgeries, scholarships and more.
            </p>
          </div>
          <a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-pine px-7 py-4 font-semibold tracking-wide hover:bg-pine-light transition-colors shrink-0"
          >
            Donate Now <Heart size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
