import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Calendar, User } from "lucide-react";
import { blogPosts } from "../../../lib/site-data";

export const metadata: Metadata = {
  title: "Blog & News | Abhyudaya Jan Kalyan Nyas",
  description:
    "Read insights, stories and updates from Abhyudaya Jan Kalyan Nyas.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-pine text-ivory relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta/10 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 text-sm text-ivory/50 mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gold">Blog & News</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">
            Insights from Abhyudaya Trust
          </h1>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-pine/8 bg-white hover:border-terracotta/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 lg:pr-10 lg:py-12">
              <span className="inline-block rounded-full bg-terracotta/10 text-terracotta text-xs font-bold tracking-widest uppercase px-3 py-1.5 mb-4">
                Featured
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-pine leading-snug mb-4 group-hover:text-terracotta transition-colors">
                {featured.title}
              </h2>
              <p className="text-pine/65 leading-relaxed mb-6 text-sm">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-5 text-xs text-pine/50 mb-6">
                <span className="flex items-center gap-1.5">
                  <User size={13} /> {featured.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {featured.date}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-terracotta group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* REST OF POSTS */}
      <section className="bg-[#FFF4E6] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl font-semibold text-pine mb-10">
            More Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-pine/8 shadow-sm hover:shadow-xl hover:border-terracotta/30 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-pine/45 mb-3">
                    <span className="flex items-center gap-1.5">
                      <User size={11} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug text-pine mb-3 group-hover:text-terracotta transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-pine/60 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}