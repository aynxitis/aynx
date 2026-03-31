"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import type { ContactFormData, ContactFormStatus } from "@/types";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.subject) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "bg-transparent border border-fg/[0.12] px-4 py-3 font-body text-sm text-fg outline-none focus:border-fg/30 transition-colors placeholder:text-fg/30";

  return (
    <section id="contact" className="px-page py-section">
      <SectionLabel num="04" title={<>LET&apos;S <span className="text-accent">TALK</span></>} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Reasons */}
        <FadeUp>
          {[
            {
              title: "HAVE A PROJECT?",
              body: "I take on freelance work. Real budgets, real timelines, real communication.",
              links: null,
            },
            {
              title: "LOOKING FOR AN INTERN?",
              body: "Available for remote internships. Ready to contribute.",
              links: null,
            },
            {
              title: "FOLLOW THE BUILD",
              body: "Documenting what I'm learning and building.",
              links: [
                { label: "GitHub →", href: "https://github.com/aynxitis" },
                { label: "LinkedIn →", href: "https://linkedin.com/in/anis-belamri" },
              ],
            },
          ].map(({ title, body, links }) => (
            <div key={title} className="py-6 border-t border-fg/[0.12] last:border-b last:border-fg/[0.12]">
              <h3 className="font-head font-bold uppercase text-sm tracking-[0] mb-2">{title}</h3>
              <p className="font-body text-sm text-fg/60 leading-[1.55]">{body}</p>
              {links && (
                <div className="flex gap-4 mt-3.5">
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label.replace(" →", "")} (opens in new tab)`}
                      className="font-body text-sm font-semibold text-fg/60 hover:text-accent transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </FadeUp>

        {/* Form */}
        <FadeUp>
          {status === "success" ? (
            <div className="border border-fg/[0.12] p-10 text-center">
              <h3 className="font-head font-bold uppercase text-base mb-1.5">MESSAGE SENT</h3>
              <p className="font-body text-sm text-fg/60">I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-fg/60">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-fg/60">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-fg/60">
                  I&apos;m reaching out about
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239a9a98' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="" disabled className="bg-bg text-fg">Select one</option>
                  <option value="freelance" className="bg-bg text-fg">A freelance project</option>
                  <option value="internship" className="bg-bg text-fg">An internship opportunity</option>
                  <option value="other" className="bg-bg text-fg">Something else</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-fg/60">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me what you're working on..."
                  required
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-12 px-8 bg-accent text-black font-body font-semibold hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>

              {status === "error" && (
                <p className="font-body text-sm text-fg/60">
                  Something went wrong. Email directly:{" "}
                  <a href="mailto:am_belamri@estin.dz" className="underline hover:text-accent transition-colors">
                    am_belamri@estin.dz
                  </a>
                </p>
              )}

              <p className="font-body text-sm text-fg/60">
                Or email directly:{" "}
                <a href="mailto:am_belamri@estin.dz" className="underline hover:text-accent transition-colors">
                  am_belamri@estin.dz
                </a>
              </p>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}