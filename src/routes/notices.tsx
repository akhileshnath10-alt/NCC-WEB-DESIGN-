import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notices & Downloads — NCC Unit" },
      {
        name: "description",
        content: "Circulars, forms, camp orders and downloadable resources for cadets and parents.",
      },
      { property: "og:title", content: "Notices & Downloads — NCC Unit" },
      { property: "og:description", content: "Circulars, forms and camp orders." },
    ],
  }),
  component: NoticesPage,
});

type Notice = {
  id: string;
  date: string;
  title: string;
  category: "Camp" | "Exam" | "Forms" | "Circular" | "Result";
  size: string;
};

const NOTICES: Notice[] = [
  {
    id: "N-2026-018",
    date: "2026-06-12",
    title: "Combined Annual Training Camp — Joining Instructions",
    category: "Camp",
    size: "PDF · 412 KB",
  },
  {
    id: "N-2026-017",
    date: "2026-06-05",
    title: "Selection trial schedule for Republic Day contingent",
    category: "Circular",
    size: "PDF · 188 KB",
  },
  {
    id: "N-2026-016",
    date: "2026-05-29",
    title: "Cadet enrolment form — Batch 2026-29",
    category: "Forms",
    size: "DOCX · 96 KB",
  },
  {
    id: "N-2026-015",
    date: "2026-05-21",
    title: "B-Certificate examination results — May 2026",
    category: "Result",
    size: "PDF · 240 KB",
  },
  {
    id: "N-2026-014",
    date: "2026-05-10",
    title: "Indemnity bond for adventure activities",
    category: "Forms",
    size: "PDF · 128 KB",
  },
  {
    id: "N-2026-013",
    date: "2026-04-28",
    title: "Annual Day order of dress and parade sequence",
    category: "Circular",
    size: "PDF · 322 KB",
  },
  {
    id: "N-2026-012",
    date: "2026-04-12",
    title: "C-Certificate written exam — syllabus & pattern",
    category: "Exam",
    size: "PDF · 268 KB",
  },
  {
    id: "N-2026-011",
    date: "2026-03-30",
    title: "Medical fitness certificate template",
    category: "Forms",
    size: "PDF · 84 KB",
  },
];

const CATEGORIES = ["All", "Camp", "Circular", "Forms", "Exam", "Result"] as const;

function NoticesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    return NOTICES.filter((n) => (cat === "All" ? true : n.category === cat))
      .filter(
        (n) =>
          n.title.toLowerCase().includes(q.toLowerCase()) ||
          n.id.toLowerCase().includes(q.toLowerCase()),
      )
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [q, cat]);

  return (
    <div>
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="label-eyebrow text-muted-foreground">03 · Bulletin Board</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Notices & Downloads
          </h1>
          <p className="mt-6 max-w-2xl text-foreground/70">
            Official orders, examination notifications and downloadable forms. Always check this
            page before reporting for a camp or parade.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative md:w-96">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search notice title or reference…"
              className="w-full rounded-sm border border-input bg-background px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              ⌕
            </span>
          </div>
          <div className="flex flex-wrap gap-1 bg-secondary p-1 rounded-sm">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={
                  "px-3 py-1.5 text-xs font-medium rounded-sm transition " +
                  (cat === c
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-border rounded-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-secondary px-5 py-3 label-eyebrow text-muted-foreground">
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Ref.</div>
            <div className="col-span-5">Title</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-1 text-right">File</div>
          </div>
          <ul className="divide-y divide-border">
            {filtered.map((n) => (
              <li
                key={n.id}
                className="grid md:grid-cols-12 gap-2 px-5 py-5 hover:bg-secondary/60 transition group"
              >
                <div className="md:col-span-2 font-mono text-xs text-[color:var(--brass)]">
                  {formatDate(n.date)}
                </div>
                <div className="md:col-span-2 font-mono text-xs text-muted-foreground">{n.id}</div>
                <div className="md:col-span-5 font-display text-lg leading-snug">{n.title}</div>
                <div className="md:col-span-2">
                  <span className="inline-block label-eyebrow bg-background border border-border px-2 py-1 text-foreground/70">
                    {n.category}
                  </span>
                </div>
                <div className="md:col-span-1 md:text-right text-xs text-muted-foreground flex md:block items-center gap-3">
                  <a
                    href="#"
                    className="text-primary font-medium border-b border-primary/40 hover:border-primary"
                  >
                    Download
                  </a>
                  <span className="md:block md:mt-1">{n.size}</span>
                </div>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-5 py-12 text-center text-sm text-muted-foreground">
                No notices match your search.
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d
    .toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}
