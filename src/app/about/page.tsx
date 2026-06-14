import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ThreadEyebrow from "@/components/ThreadEyebrow";
import { partners } from "@/lib/site-data";

export const metadata = {
  title: "About Us | Abhyudaya Jan Kalyan Nyas",
  description:
    "Learn about the mission, vision and leadership of Abhyudaya Jan Kalyan Nyas, a trust working for the upliftment of underprivileged communities in Haryana.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-pine text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">About Us</h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-ivory/70">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold">About Us</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 sm:h-[28rem] rounded-2xl overflow-hidden order-1 lg:order-none">
              <Image
                src="https://abhyudayatrust.org/assets/img/about/story-2.jpg"
                alt="Community members gathered at an Abhyudaya Trust event"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <ThreadEyebrow label="Our Story" />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                Grooming talent, in service of society
              </h2>
              <p className="text-pine/75 leading-relaxed mb-4">
                Abhyudaya Jan Kalyan Nyas aims at the overall betterment of
                society by grooming talent for working in all spheres of
                life with dedication for the underprivileged and deprived, as
                per our trust deed.
              </p>
              <p className="text-pine/75 leading-relaxed">
                We wish to associate with more like-minded people and expand
                our sphere of working. Join hands with us to actively
                participate in the upliftment of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-56">
                <Image
                  src="https://abhyudayatrust.org/assets/img/about/mission.jpg"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <ThreadEyebrow label="Our Mission" />
                <p className="text-pine/75 leading-relaxed">
                  To associate with more and more like-minded people who can
                  join hands and actively participate in the upliftment of
                  society.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-56">
                <Image
                  src="https://abhyudayatrust.org/assets/img/about/vision.jpg"
                  alt="Our vision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <ThreadEyebrow label="Our Vision" />
                <p className="text-pine/75 leading-relaxed">
                  Overall betterment of society and work with dedication for
                  the people who are underprivileged and deprived.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESIDENT'S MESSAGE */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative h-56 w-56 rounded-full overflow-hidden ring-4 ring-sand">
                <Image
                  src="https://abhyudayatrust.org/assets/img/president.png"
                  alt="Dr Yogender Malik, President"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-6 font-display text-lg font-semibold">
                Dr Yogender Malik
              </p>
              <p className="text-sm text-pine/60">MBBS, MD &mdash; President</p>
            </div>
            <div>
              <ThreadEyebrow label="President's Message" />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                Dear Friends,
              </h2>
              <div className="space-y-4 text-pine/75 leading-relaxed">
                <p>
                  At Abhyudaya Jan Kalyan Nyas, we believe that true progress
                  is measured not only in economic terms but also in the
                  well-being, dignity and empowerment of every individual.
                  Since our inception, our mission has been to serve society
                  with compassion, integrity and dedication — uplifting the
                  underprivileged, supporting education, promoting
                  healthcare and nurturing values of social harmony.
                </p>
                <p>
                  The Nyas is a collective effort of people who dream of a
                  better tomorrow. Each initiative we take, whether in
                  healthcare, education, nutrition, plantation drives, rural
                  development, de-addiction, youth empowerment or community
                  welfare, is driven by the vision of inclusive growth and
                  sustainable change.
                </p>
                <p>
                  I invite you to join us in this journey — through your
                  participation, support and goodwill. Together, we can
                  transform challenges into opportunities and aspirations
                  into realities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ThreadEyebrow label="Our Network" align="center" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Partners &amp; collaborators
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {partners.map((src, idx) => (
              <div
                key={idx}
                className="relative h-28 sm:h-32 bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center p-6"
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
    </>
  );
}
