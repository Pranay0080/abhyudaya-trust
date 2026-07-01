"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="grid sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
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
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.subject}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          className="rounded-xl border border-pine/15 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-terracotta text-ivory font-semibold px-7 py-4 tracking-wide hover:bg-terracotta-dark transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="sm:col-span-2 text-sm text-pine/80">
          Thanks for reaching out! We&rsquo;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-terracotta">{errorMsg}</p>
      )}
    </form>
  );
}