import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
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
      {/* HEADER */}
      <section className="bg-pine text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 text-sm text-ivory/50 mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gold">Our Initiatives</span>
          </div>
          <ThreadEyebrow label="What We Do" light />
          <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-2 max-w-2xl leading-tight">
            Our Initiatives
          </h1>
          <p className="mt-4 text-ivory/60 max-w-xl leading-relaxed">
            Nine focused programmes addressing healthcare, education and social
            welfare across Haryana and beyond.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl overflow-hidden border border-pine/10 bg-white"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-pine/10" />
                  <span className="absolute top-4 left-4 bg-terracotta text-ivory text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {item.number}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 border-t border-pine/8">
                  <h3 className="font-display text-lg font-semibold text-pine leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-pine/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="bg-[#FFF4E6] py-16 sm:py-20 border-t border-pine/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <ThreadEyebrow label="Support Our Work" />
            <h2 className="font-display text-3xl font-semibold text-pine mt-2 mb-3">
              Help us reach more communities
            </h2>
            <p className="text-pine/65 leading-relaxed">
              Every contribution funds spectacles, surgeries, scholarships and
              more. Your generosity creates lasting change.
            </p>
          </div>
          <a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta text-ivory px-8 py-4 font-semibold hover:bg-terracotta/90 transition-colors shrink-0"
          >
            Donate Now <Heart size={18} />
          </a>
        </div>
      </section>
    </>
  );
}