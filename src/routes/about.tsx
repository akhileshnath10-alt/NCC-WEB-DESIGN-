import { createFileRoute } from "@tanstack/react-router";
import hero from "../assets/hero-parade.jpg";

const g3 = hero;
const g6 = hero;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NCC College Unit" },
      {
        name: "description",
        content: "Our motto, history and the officers behind the college NCC unit.",
      },
      { property: "og:title", content: "About — NCC College Unit" },
      { property: "og:description", content: "Motto, history and officers." },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  {
    y: "1972",
    t: "Unit raised",
    d: "Formed under the 7 Kerala Battalion with 60 cadets in its first batch.",
  },
  {
    y: "1986",
    t: "Naval Wing added",
    d: "Coastal training and sailing introduced at the Cochin shipyard.",
  },
  { y: "2004", t: "First RDC selection", d: "Cadet Sgt. Anu Pillai marches at Rajpath." },
  { y: "2019", t: "Best Unit Trophy", d: "Awarded by the DG NCC for community service hours." },
  {
    y: "2024",
    t: "Girls platoon expanded",
    d: "Strength of the SD Girls platoon crosses 100 cadets.",
  },
];

const OFFICERS = [
  { n: "Lt. Col. R. Menon", r: "Group Commander", c: "NCC Group HQ, Kochi" },
  { n: "Maj. Anitha P.", r: "Associate NCC Officer", c: "Senior Wing — SD/SW" },
  { n: "Capt. Joshy K.", r: "Caretaker Officer", c: "Drill & Training" },
  { n: "Hav. (Retd.) Sasi", r: "Permanent Instructor", c: "Weapon Training" },
];

function AboutPage() {
  return (
    <div>
      <header className="relative overflow-hidden border-b border-border/60">
        <img src={g3} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[color:var(--olive-deep)]/85" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-primary-foreground">
          <div className="label-eyebrow text-[color:var(--brass)]">04 · About Us</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Ekta aur Anushasan —{" "}
            <em className="not-italic text-[color:var(--brass)] font-normal">
              Unity and Discipline.
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-primary-foreground/80">
            More than just a parade. The NCC trains young Indians to be confident, disciplined, and
            useful to the nation — in or out of uniform.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="label-eyebrow text-muted-foreground">Our motto</div>
          <h2 className="mt-4 font-display text-4xl">Aims of the Corps</h2>
        </div>
        <ol className="md:col-span-7 space-y-8">
          {[
            {
              t: "Develop Character",
              d: "Comradeship, discipline, leadership, secular outlook, spirit of adventure.",
            },
            {
              t: "Create a Human Resource",
              d: "Of organised, trained and motivated youth to provide leadership in all walks of life.",
            },
            {
              t: "Provide an Environment",
              d: "To motivate youth to take up a career in the Armed Forces.",
            },
          ].map((a, i) => (
            <li
              key={a.t}
              className="grid grid-cols-[auto_1fr] gap-6 border-b border-border pb-8 last:border-0"
            >
              <div className="font-display text-5xl text-[color:var(--brass)] leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-2xl">{a.t}</h3>
                <p className="mt-2 text-muted-foreground">{a.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border/60 bg-[color:var(--olive-mid)]/5">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="label-eyebrow text-muted-foreground">Half a century</div>
            <h2 className="mt-3 font-display text-4xl">A short history.</h2>
            <img
              src={g6}
              alt=""
              loading="lazy"
              className="mt-8 rounded-sm aspect-[4/5] object-cover"
            />
          </div>
          <div className="md:col-span-8">
            <ol className="relative border-l border-border ml-3 space-y-10">
              {TIMELINE.map((t) => (
                <li key={t.y} className="pl-8 relative">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[color:var(--brass)]" />
                  <div className="font-mono text-xs text-[color:var(--brass)]">{t.y}</div>
                  <div className="mt-1 font-display text-2xl">{t.t}</div>
                  <p className="mt-2 text-muted-foreground max-w-xl">{t.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="label-eyebrow text-muted-foreground">Command</div>
        <h2 className="mt-3 font-display text-4xl">Officers & Instructors</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {OFFICERS.map((o) => (
            <div key={o.n} className="bg-background p-8">
              <div className="h-14 w-14 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl">
                {o.n.split(" ").slice(-1)[0][0]}
              </div>
              <div className="mt-6 font-display text-xl leading-tight">{o.n}</div>
              <div className="mt-1 text-sm text-[color:var(--brass)] font-mono">{o.r}</div>
              <div className="mt-3 text-sm text-muted-foreground">{o.c}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
