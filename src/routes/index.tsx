import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "../assets/hero-parade.jpg";

const g1 = hero;
const g3 = hero;
const g6 = hero;
import { CountUp } from "@/components/count-up";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NCC College Unit — Discipline · Service · Honour" },
      {
        name: "description",
        content:
          "Home of the NCC unit. Parades, camps, adventure training and community service for cadets of our college.",
      },
      { property: "og:title", content: "NCC College Unit" },
      { property: "og:description", content: "Parades, camps, adventure training and service." },
    ],
  }),
  component: Index,
});

const STATS = [
  { k: 47, l: "Active Cadets" },
  { k: 9, l: "Camps Attended" },
  { k: 1, l: "Republic Day Picks" },
  { k: 2024, l: "Established" },
];

const ANNOUNCEMENTS = [
  { date: "12 JUN", title: "Combined Annual Training Camp — Registrations open", tag: "Camp" },
  { date: "04 JUN", title: "Selection trials for Republic Day Parade contingent", tag: "Trial" },
  { date: "28 MAY", title: "Tree plantation drive at Marine Drive — 80 cadets", tag: "Service" },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <img
          src={hero}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--olive-deep)]/95 via-[color:var(--olive-deep)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--olive-deep)]/80 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-32 md:pt-40 md:pb-48 text-primary-foreground">
          <div className="flex items-center gap-3 label-eyebrow text-[color:var(--brass)]">
            <span className="h-px w-10 bg-[color:var(--brass)]" />
            NATIONAL CADET CORPS · 11 KL BN&nbsp;
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            We march at dawn,{" "}
            <em className="text-[color:var(--brass)] not-italic font-normal">
              so the day belongs to us.
            </em>
          </h1>
          <address className="mt-8 max-w-xl text-base md:text-lg text-primary-foreground/80 not-italic">
            College of Engineering and Management Punnapra
          </address>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--brass)] px-6 py-3 text-sm font-medium text-[color:var(--olive-deep)] hover:brightness-110 transition"
            >
              Cadet Portal →
            </Link>
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition"
            >
              See Activities
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
            {STATS.map((s) => (
              <div key={s.l} className="bg-[color:var(--olive-deep)]/70 px-5 py-6">
                <div className="font-display text-4xl text-[color:var(--brass)]">
                  <CountUp end={s.k} duration={2000} useLocale={s.l !== "Established"} />
                </div>
                <div className="mt-1 label-eyebrow text-primary-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="border-b border-border/60 bg-[color:var(--olive-mid)]/5">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {[
              { to: "/", label: "Home" },
              { to: "/activities", label: "Activities" },
              { to: "/notices", label: "Notices" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{
                  className:
                    "px-4 py-2 text-sm font-medium rounded-sm bg-primary text-primary-foreground transition",
                }}
                activeOptions={{ exact: n.to === "/" }}
                className="px-4 py-2 text-sm font-medium rounded-sm text-foreground/80 hover:text-foreground hover:bg-secondary transition"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* MOTTO / INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="label-eyebrow text-muted-foreground">01 · The Unit</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            A college within the College — built on drill, doctrine and a sense of duty.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-base text-foreground/80 leading-relaxed">
          <p>
            Our unit was raised in 2024 under the 11 Kerala Battalion. Since then, more than four
            thousand cadets have passed through its parade ground — many of whom went on to serve in
            the Armed Forces, Police, and civil services.
          </p>
          <p>
            Beyond drill, we run trekking expeditions in the Western Ghats, blood donation camps,
            coastal clean-ups, and the annual Combined Annual Training Camp. Two cadets are selected
            every year for the Republic Day contingent at Rajpath.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary/40 pb-0.5 hover:border-primary"
          >
            Read our history
          </Link>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border/60 bg-[color:var(--olive-mid)]/5">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              n: "I",
              t: "Drill & Parade",
              d: "Weekly parade, ceremonial drill, rifle handling and inter-unit competitions throughout the year.",
            },
            {
              n: "II",
              t: "Adventure",
              d: "Trekking, rappelling, sailing and para-jump camps. Earn certifications recognised by the Armed Forces.",
            },
            {
              n: "III",
              t: "Service",
              d: "Tree plantation, traffic regulation, disaster relief and visits to old-age homes. Three social-service projects per cadet, per year.",
            },
          ].map((p) => (
            <div key={p.n} className="bg-background p-10">
              <div className="font-display text-6xl text-[color:var(--brass)]">{p.n}</div>
              <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANNOUNCEMENTS + GALLERY PEEK */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="flex items-end justify-between">
            <div>
              <div className="label-eyebrow text-muted-foreground">02 · Bulletin</div>
              <h2 className="mt-2 font-display text-4xl">Latest Orders</h2>
            </div>
            <Link
              to="/notices"
              className="text-sm text-primary border-b border-primary/40 hover:border-primary"
            >
              All notices →
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-border">
            {ANNOUNCEMENTS.map((a) => (
              <li key={a.title} className="py-6 flex gap-6 items-start group">
                <div className="font-mono text-xs text-[color:var(--brass)] w-16 shrink-0 pt-1">
                  {a.date}
                </div>
                <div className="flex-1">
                  <span className="label-eyebrow text-muted-foreground">{a.tag}</span>
                  <div className="mt-1 font-display text-xl group-hover:text-primary transition">
                    {a.title}
                  </div>
                </div>
                <span className="text-foreground/40 group-hover:text-primary transition">→</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-3">
          <img
            src={g3}
            alt="Cadet saluting"
            loading="lazy"
            width={1024}
            height={1280}
            className="row-span-2 h-full w-full object-cover rounded-sm"
          />
          <img
            src={g6}
            alt="Band"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover rounded-sm"
          />
          <img
            src={g1}
            alt="Rappelling"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover rounded-sm"
          />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h3 className="font-display text-4xl md:text-5xl max-w-2xl leading-tight">
            Enrolment for the next batch closes{" "}
            <span className="text-[color:var(--brass)]">31 July</span>.
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition self-start md:self-auto"
          >
            Speak to the ANO →
          </Link>
        </div>
      </section>
    </div>
  );
}
