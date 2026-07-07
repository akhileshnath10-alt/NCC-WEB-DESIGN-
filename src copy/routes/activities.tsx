import { createFileRoute } from "@tanstack/react-router";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities & Gallery — NCC Unit" },
      {
        name: "description",
        content:
          "Camps, parades, expeditions and service drives conducted by the college NCC unit.",
      },
      { property: "og:title", content: "Activities & Gallery — NCC Unit" },
      { property: "og:description", content: "Camps, parades, expeditions and service drives." },
    ],
  }),
  component: ActivitiesPage,
});

const EVENTS = [
  {
    d: "MAY 2026",
    t: "Combined Annual Training Camp",
    p: "Pangode Military Station",
    n: "120 cadets, 10 days of drill, weapon handling and field-craft.",
    img: g1,
  },
  {
    d: "MAR 2026",
    t: "Republic Day Selection Camp",
    p: "Trivandrum",
    n: "Two cadets selected for the contingent at Kartavya Path.",
    img: g3,
  },
  {
    d: "FEB 2026",
    t: "Western Ghats Trek",
    p: "Munnar — Anamudi",
    n: "5-day high-altitude trek; 32 cadets summited at 2,695 m.",
    img: g5,
  },
  {
    d: "JAN 2026",
    t: "Coastal Clean-Up Drive",
    p: "Fort Kochi Beach",
    n: "780 kg of waste removed in partnership with Kerala Coast Guard.",
    img: g2,
  },
  {
    d: "DEC 2025",
    t: "Firing Practice — Inter-Unit",
    p: "KAP Range",
    n: ".22 rifle competition; unit placed second in the battalion.",
    img: g4,
  },
  {
    d: "NOV 2025",
    t: "Annual Day Parade & Band Display",
    p: "College Ground",
    n: "Ceremonial parade reviewed by the Group Commander.",
    img: g6,
  },
];

const GALLERY = [g1, g2, g3, g4, g5, g6, g1, g2, g3];

function ActivitiesPage() {
  return (
    <div>
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="label-eyebrow text-muted-foreground">02 · Field Log</div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Activities & Gallery
            </h1>
          </div>
          <p className="md:col-span-4 text-foreground/70 leading-relaxed">
            A year-round calendar of camps, expeditions and service drives. Every cadet completes at
            least 120 hours of training per academic year.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="label-eyebrow text-muted-foreground">Recent events</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          From the parade ground to the peaks.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e) => (
            <article key={e.t} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
                <img
                  src={e.img}
                  alt={e.t}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-background/95 px-3 py-1 label-eyebrow text-foreground">
                  {e.d}
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-snug">{e.t}</h3>
              <div className="mt-1 text-xs font-mono text-[color:var(--brass)]">{e.p}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.n}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-[color:var(--olive-mid)]/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="label-eyebrow text-muted-foreground">Photo album</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">In frames.</h2>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground font-mono">
              2025 — 2026
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((src, i) => (
              <a
                key={i}
                href={src}
                target="_blank"
                rel="noopener"
                className={
                  "block overflow-hidden rounded-sm group " + (i % 5 === 0 ? "row-span-2" : "")
                }
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
