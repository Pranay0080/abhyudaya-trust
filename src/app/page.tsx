import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Stethoscope, GraduationCap } from "lucide-react";
import ThreadEyebrow from "@/components/ThreadEyebrow";
import StatCounter from "@/components/StatCounter";
import {
  siteConfig,
  impactStats,
  initiatives,
  impactStories,
  blogPosts,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-pine text-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://abhyudayatrust.org/assets/img/about/story-2.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/90 to-pine/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
          <div className="max-w-3xl">
            <ThreadEyebrow label="Abhyudaya Jan Kalyan Nyas" light />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1]">
              Service is joy — building brighter
              <span className="text-gold italic"> futures</span> in Sonipat
              and beyond.
            </h1>
            <p className="mt-6 text-lg text-ivory/80 max-w-2xl leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={siteConfig.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-4 font-semibold tracking-wide hover:bg-terracotta-dark transition-colors"
              >
                Donate Now <Heart size={18} />
              </a>
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-4 font-semibold tracking-wide hover:bg-ivory/10 transition-colors"
              >
                Our Initiatives <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <ThreadEyebrow label="Impact Stories" />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-xl">
                Inspiring stories of change &amp; hope
              </h2>
            </div>
            <Link
              href="/impact-stories"
              className="inline-flex items-center gap-2 font-semibold text-terracotta hover:text-terracotta-dark transition-colors shrink-0"
            >
              Discover More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {impactStories.map((story, idx) => (
              <Link
                key={story.title}
                href={story.href}
                className={`group relative overflow-hidden rounded-2xl ${
                  idx === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                } ${idx === 0 ? "aspect-[4/5] sm:aspect-auto sm:h-full" : "aspect-[4/5]"}`}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-pine/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ivory leading-snug">
                    {story.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION + STATS */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <ThreadEyebrow label="Support Abhyudaya" align="center" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Where hope and learning create brighter futures
            </h2>
            <p className="mt-6 text-pine/75 leading-relaxed">
              Abhyudaya Jan Kalyan Nyas works tirelessly to uplift
              underprivileged communities through education, healthcare and
              social welfare programs. Your support helps us train talented
              individuals, provide essential services and create
              opportunities for those who need it most. Together, we can
              build a society where every child and family has access to a
              better future.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {impactStats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ThreadEyebrow label="Our Initiatives" align="center" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Transforming lives through projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-2xl bg-white border border-pine/5 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 font-data text-xs font-bold text-ivory bg-terracotta rounded-full px-3 py-1">
                    {item.number}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold leading-snug mb-2 group-hover:text-terracotta transition-colors">
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

      {/* DONATE CTA */}
      <section className="bg-pine text-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://abhyudayatrust.org/assets/img/howwork/1.jpg"
                alt="Volunteers supporting a community health camp"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <ThreadEyebrow label="Make a Donation" light />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                Support a cause today
              </h2>
              <p className="text-ivory/75 leading-relaxed mb-8">
                Your contribution can make a profound difference in the lives
                of those who need it most. By supporting our programs, you
                help provide access to quality education for underprivileged
                children, ensure essential healthcare reaches vulnerable
                communities, and promote sustainable development that
                strengthens local communities. Every donation — big or small
                — creates a ripple of positive change that lasts for
                generations.
              </p>
              <a
                href={siteConfig.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-4 font-semibold tracking-wide hover:bg-terracotta-dark transition-colors"
              >
                Donate Now <Heart size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <ThreadEyebrow label="Blog &amp; News" align="center" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Insights from Abhyudaya Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group rounded-2xl overflow-hidden bg-white border border-pine/5 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold leading-snug mb-3 group-hover:text-terracotta transition-colors">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ThreadEyebrow label="Abhyudaya Jan Kalyan Nyas" />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                Bhagat Phool Singh Scholarship Scheme
              </h2>
              <p className="text-pine/75 leading-relaxed mb-8">
                The Bhagat Phool Singh Scholarship Scheme aims to support
                deserving and underprivileged students who wish to pursue
                higher education. This scholarship helps reduce the financial
                burden on students by covering tuition and essential academic
                expenses.
              </p>
              <Link
                href="/scholarship-form"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta text-ivory px-7 py-4 font-semibold tracking-wide hover:bg-terracotta-dark transition-colors"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6 flex flex-col items-center text-center shadow-sm">
                <GraduationCap className="text-terracotta mb-3" size={32} />
                <p className="font-display font-semibold">Tuition Support</p>
              </div>
              <div className="rounded-2xl bg-white p-6 flex flex-col items-center text-center shadow-sm">
                <Stethoscope className="text-terracotta mb-3" size={32} />
                <p className="font-display font-semibold">Healthcare Access</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-white p-6 flex flex-col items-center text-center shadow-sm">
                <Heart className="text-terracotta mb-3" size={32} />
                <p className="font-display font-semibold">
                  Community-driven Support for Meritorious Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
