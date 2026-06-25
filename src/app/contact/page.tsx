import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import ThreadEyebrow from "@/components/ThreadEyebrow";
import { siteConfig } from "@/lib/site-data";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | Abhyudaya Jan Kalyan Nyas",
  description:
    "Get in touch with Abhyudaya Jan Kalyan Nyas in Gohana, Sonipat, Haryana — by phone, email or post.",
};

export default function ContactPage() {
  return (
    <>
   <section className="relative overflow-hidden text-ivory">
  <div className="absolute inset-0 z-0">
    <Image
      src="/contactpage.png"
      alt="Community initiative in action"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-pine/65" />
  </div>

  <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta/10 pointer-events-none z-10" />
  <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-gold/5 pointer-events-none z-10" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
    <div className="flex items-center gap-2 text-sm text-ivory/50 mb-6">
      <Link href="/" className="hover:text-gold transition-colors">Home</Link>
      <ChevronRight size={14} />
      <span className="text-gold">Contact Us</span>
    </div>
   <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-2xl">
  Let's <span className="text-gold italic">connect.</span>
</h1>

<p className="mt-6 text-ivory/75 text-lg max-w-xl leading-relaxed">
  Whether you want to volunteer, support a cause, partner with us, or learn
  more about our initiatives, we would love to hear from you. Together, we can
  create meaningful change and build brighter futures for those who need it
  most.
</p>
  </div>
</section>

      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            {/* Info */}
            <div>
              <ThreadEyebrow label="Get In Touch" />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                We&rsquo;d love to hear from you
              </h2>
              <p className="text-pine/75 leading-relaxed mb-8">
                Whether you want to volunteer, partner with us or learn more
                about our programs, reach out and our team will get back to
                you.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-terracotta shrink-0">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-pine/70">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-terracotta shrink-0">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-pine/70 hover:text-terracotta transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-terracotta shrink-0">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-pine/70 hover:text-terracotta transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10">
              <form className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-pine/15 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-xl border border-pine/15 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="rounded-xl border border-pine/15 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="rounded-xl border border-pine/15 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-terracotta text-ivory font-semibold px-7 py-4 tracking-wide hover:bg-terracotta-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-2xl overflow-hidden h-80 sm:h-96 border border-pine/5">
            <iframe
              title="Map showing Abhyudaya Jan Kalyan Nyas location in Gohana, Sonipat"
              src="https://www.google.com/maps?q=Vishnu+Nagar,+Gohana,+Sonipat,+Haryana&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
