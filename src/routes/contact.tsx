import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NCC College Unit" },
      {
        name: "description",
        content: "Reach the NCC unit office, ANO and instructors. Address, phone, email and map.",
      },
      { property: "og:title", content: "Contact — NCC College Unit" },
      { property: "og:description", content: "Get in touch with the unit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="label-eyebrow text-muted-foreground">05 · Get in touch</div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Reach the unit.
            </h1>
          </div>
          <p className="md:col-span-4 text-foreground/70">
            Enrolment queries, alumni greetings, press requests — we answer them all within two
            working days.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-10">
          {[
            {
              l: "Unit Office",
              v: "NCC Office, Block C, Ground Floor\nCollege Campus\nKochi, Kerala 682011",
            },
            { l: "Phone", v: "+91 484 220 8800\n+91 98470 12345 (ANO)" },
            { l: "Email", v: "ncc@college.edu\nano.ncc@college.edu" },
            { l: "Office Hours", v: "Mon — Fri · 09:00 – 16:00\nSat (Parade) · 06:30 – 09:30" },
          ].map((b) => (
            <div key={b.l}>
              <div className="label-eyebrow text-muted-foreground">{b.l}</div>
              <div className="mt-2 font-display text-xl whitespace-pre-line">{b.v}</div>
            </div>
          ))}
          <div className="rounded-sm overflow-hidden border border-border">
            <iframe
              title="College map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.27%2C9.95%2C76.30%2C9.97&layer=mapnik"
              className="w-full h-72"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-7 border border-border rounded-sm p-8 md:p-10 bg-card"
        >
          <div className="label-eyebrow text-muted-foreground">Send a message</div>
          <h2 className="mt-2 font-display text-3xl">Speak to the unit office.</h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Field name="name" label="Full name" placeholder="Cdt. Aravind R." />
            <Field name="email" label="Email" type="email" placeholder="you@college.edu" />
            <Field name="phone" label="Phone" placeholder="+91 …" />
            <Field name="role" label="You are…" placeholder="Aspiring cadet / Parent / Alumni" />
          </div>
          <div className="mt-5">
            <span className="label-eyebrow text-muted-foreground">Message</span>
            <textarea
              name="msg"
              rows={5}
              placeholder="Tell us what you need."
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Send message →
          </button>

          {sent && (
            <div className="mt-6 rounded-sm border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary">
              Message received. We'll respond within two working days.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="label-eyebrow text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
      />
    </label>
  );
}
