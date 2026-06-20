import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../../../../lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts
    .filter((post) => Boolean(post.slug))
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Abhyudaya Jan Kalyan Nyas`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  if (postIndex === -1) notFound();

  const post = blogPosts[postIndex];
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-pine text-ivory relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta/10 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 text-sm text-ivory/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-gold truncate max-w-[200px]">{post.title}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 mt-6 text-ivory/60 text-sm">
            <span className="flex items-center gap-2">
              <User size={14} className="text-gold" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-gold" />
              {post.date}
            </span>
          </div>
        </div>
      </section>
{/* 
      HERO IMAGE
      <div className="relative h-72 sm:h-96 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine/30 to-pine/5" />
      </div> */}

      {/* ARTICLE CONTENT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-pine/50 hover:text-terracotta transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Back to all articles
          </Link>

          <article
            className="
              text-pine/75 leading-relaxed
              [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-pine [&_h3]:mt-10 [&_h3]:mb-4
              [&_h4]:font-display [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-pine [&_h4]:mt-8 [&_h4]:mb-3 [&_h4]:border-l-4 [&_h4]:border-terracotta [&_h4]:pl-4
              [&_p]:mb-5 [&_p]:text-[15px]
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2
              [&_li]:text-[15px] [&_li]:text-pine/70
              [&_strong]:text-pine [&_strong]:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* PREV / NEXT NAV */}
      <section className="bg-[#FFF4E6] border-t border-pine/10 py-12">
        <div className="mx-auto max-w-4xl px-6 grid sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex flex-col rounded-2xl border border-pine/10 bg-white p-6 hover:border-terracotta/30 hover:shadow-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2 text-xs text-pine/45 font-semibold tracking-widest uppercase mb-2">
                <ArrowLeft size={13} /> Previous
              </span>
              <p className="font-display font-semibold text-pine text-sm leading-snug group-hover:text-terracotta transition-colors">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex flex-col rounded-2xl border border-pine/10 bg-white p-6 hover:border-terracotta/30 hover:shadow-lg transition-all duration-300 text-right sm:items-end"
            >
              <span className="flex items-center gap-2 text-xs text-pine/45 font-semibold tracking-widest uppercase mb-2">
                Next <ArrowRight size={13} />
              </span>
              <p className="font-display font-semibold text-pine text-sm leading-snug group-hover:text-terracotta transition-colors">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}