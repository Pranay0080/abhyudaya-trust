import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, Users, Leaf, BookOpen, Stethoscope, Sprout, Shield, Star } from "lucide-react";
import ThreadEyebrow from "@/components/ThreadEyebrow";
import { partners } from "@/lib/site-data";

export const metadata = {
  title: "About Us | Abhyudaya Jan Kalyan Nyas",
  description:
    "Learn about the mission, vision and leadership of Abhyudaya Jan Kalyan Nyas, a trust working for the upliftment of underprivileged communities in Haryana.",
};

const initiatives = [
  { icon: Stethoscope, label: "Healthcare" },
  { icon: BookOpen, label: "Education" },
  { icon: Sprout, label: "Nutrition" },
  { icon: Leaf, label: "Plantation" },
  { icon: Users, label: "Rural Development" },
  { icon: Shield, label: "De-addiction" },
  { icon: Star, label: "Youth Empowerment" },
  { icon: Heart, label: "Community Welfare" },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-pine text-ivory relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta/10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-gold/5 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="flex items-center gap-2 text-sm text-ivory/50 mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gold">About Us</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-2xl">
            Service is{" "}
            <span className="text-gold italic">joy.</span>
          </h1>
          <p className="mt-6 text-ivory/70 text-lg max-w-xl leading-relaxed">
            Abhyudaya Jan Kalyan Nyas — grooming talent and uplifting communities in Sonipat, Haryana since our founding.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: decorative typographic block */}
            <div className="relative">
              <div className="rounded-3xl bg-[#FFF4E6] border border-terracotta/15 p-10 sm:p-14">
                <p className="font-display text-6xl sm:text-8xl font-bold text-terracotta/15 leading-none select-none mb-6">
                  अभ्युदय
                </p>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-pine leading-snug">
                  "Upliftment through dedicated service to the underprivileged."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-terracotta/20" />
                  <span className="text-xs font-data font-semibold tracking-widest uppercase text-terracotta">
                    Trust Deed
                  </span>
                  <div className="h-px flex-1 bg-terracotta/20" />
                </div>
              </div>
              {/* floating accent */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-pine flex items-center justify-center shadow-xl">
                <Heart className="text-gold" size={32} />
              </div>
            </div>

            {/* Right: story text */}
            <div>
              <ThreadEyebrow label="Our Story" />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                Grooming talent, in service of society
              </h2>
              <div className="space-y-4 text-pine/70 leading-relaxed">
                <p>
                  Abhyudaya Jan Kalyan Nyas aims at the overall betterment of society
                  by grooming talent for working in all spheres of life with dedication
                  for the underprivileged and deprived, as per our trust deed.
                </p>
                <p>
                  We wish to associate with more like-minded people and expand our
                  sphere of working. Join hands with us to actively participate in
                  the upliftment of society.
                </p>
              </div>
              <Link
                href="/initiatives"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta text-white font-semibold px-7 py-4 hover:bg-terracotta-dark transition-colors"
              >
                See Our Initiatives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-pine text-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ThreadEyebrow label="Our Purpose" align="center" light />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              What drives us every day
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-10 relative overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-terracotta/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-terracotta/20 mb-6">
                  <Users className="text-terracotta" size={24} />
                </span>
                <ThreadEyebrow label="Our Mission" light />
                <p className="text-ivory/75 leading-relaxed text-lg">
                  To associate with more and more like-minded people who can join hands
                  and actively participate in the upliftment of society.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-10 relative overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/20 mb-6">
                  <Star className="text-gold" size={24} />
                </span>
                <ThreadEyebrow label="Our Vision" light />
                <p className="text-ivory/75 leading-relaxed text-lg">
                  Overall betterment of society and work with dedication for the people
                  who are underprivileged and deprived.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — initiative icon grid */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ThreadEyebrow label="Areas of Work" align="center" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Every initiative driven by one vision
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {initiatives.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center text-center rounded-2xl border border-pine/8 bg-white hover:border-terracotta/30 hover:shadow-lg transition-all duration-300 p-6 sm:p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF4E6] flex items-center justify-center mb-4 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                  <Icon className="text-terracotta group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <p className="font-display font-semibold text-pine text-sm sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESIDENT'S MESSAGE */}
      <section className="bg-[#FFF4E6] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">

            {/* Left: president card — no photo, typographic */}
            <div className="flex flex-col">
              <div className="rounded-3xl bg-pine text-ivory p-8 text-center">
                {/* Monogram avatar */}
                <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center mx-auto mb-4 text-white font-display text-3xl font-bold select-none">
                  YM
                </div>
                <p className="font-display text-xl font-semibold">
                  Dr Yogender Malik
                </p>
                <p className="text-ivory/60 text-sm mt-1">MBBS, MD</p>
                <div className="mt-4 inline-block rounded-full bg-gold/20 text-gold text-xs font-data font-bold tracking-widest uppercase px-4 py-1.5">
                  President
                </div>
              </div>

              {/* Quote pull */}
              <div className="mt-6 rounded-2xl border border-pine/10 bg-white p-6">
                <p className="font-display text-pine/80 italic leading-relaxed text-sm">
                  "True progress is measured not only in economic terms but also
                  in the well-being, dignity and empowerment of every individual."
                </p>
              </div>
            </div>

            {/* Right: message */}
            <div>
              <ThreadEyebrow label="President's Message" />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">
                Dear Friends,
              </h2>
              <div className="space-y-5 text-pine/70 leading-relaxed">
                <p>
                  At Abhyudaya Jan Kalyan Nyas, we believe that true progress is
                  measured not only in economic terms but also in the well-being,
                  dignity and empowerment of every individual. Since our inception,
                  our mission has been to serve society with compassion, integrity
                  and dedication — uplifting the underprivileged, supporting
                  education, promoting healthcare and nurturing values of social
                  harmony.
                </p>
                <p>
                  The Nyas is a collective effort of people who dream of a better
                  tomorrow. Each initiative we take, whether in healthcare,
                  education, nutrition, plantation drives, rural development,
                  de-addiction, youth empowerment or community welfare, is driven
                  by the vision of inclusive growth and sustainable change.
                </p>
                <p>
                  I invite you to join us in this journey — through your
                  participation, support and goodwill. Together, we can transform
                  challenges into opportunities and aspirations into realities.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-pine text-pine font-semibold px-7 py-3.5 hover:bg-pine hover:text-ivory transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ThreadEyebrow label="Our Network" align="center" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Partners &amp; collaborators
            </h2>
            <p className="mt-4 text-pine/60 leading-relaxed">
              We work alongside institutions and organisations that share our
              vision of an equitable, empowered society.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {partners.map((src, idx) => (
              <div
                key={idx}
                className="relative h-28 sm:h-32 bg-white rounded-2xl border border-pine/10 shadow-sm overflow-hidden flex items-center justify-center p-6 hover:border-terracotta/30 hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Partner organisation ${idx + 1}`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN US CTA */}
      <section className="bg-pine text-ivory py-20">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <ThreadEyebrow label="Join the Mission" light />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Be part of the change.
            </h2>
            <p className="mt-4 text-ivory/65 leading-relaxed">
              Whether through volunteering, donations or partnerships — your
              support helps us reach more communities and create lasting impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://razorpay.com/payment-button/pl_K14WzDNuDgdtYs/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta text-white font-semibold px-8 py-4 hover:bg-terracotta-dark transition-colors"
            >
              <Heart size={18} /> Donate Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 font-semibold px-8 py-4 hover:bg-ivory/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}