import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Moon, Sun, Instagram } from "lucide-react";

import appCss from "../styles.css?url";
import nccLogo from "../assets/ncc-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
  console.error(error);
}, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NCC College Unit — Discipline, Service, Honour" },
      { name: "description", content: "Official portal of the NCC unit at our college. Activities, notices, gallery and cadet login." },
      { property: "og:title", content: "NCC College Unit — Discipline, Service, Honour" },
      { property: "og:description", content: "Official portal of the NCC unit at our college. Activities, notices, gallery and cadet login." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "NCC College Unit — Discipline, Service, Honour" },
      { name: "twitter:description", content: "Official portal of the NCC unit at our college. Activities, notices, gallery and cadet login." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eea89320-902c-4c6e-9339-3e6b3a668ba7/id-preview-6c92e76d--839b528a-e6ea-4a0d-913d-a78c8337234c.lovable.app-1781430239395.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eea89320-902c-4c6e-9339-3e6b3a668ba7/id-preview-6c92e76d--839b528a-e6ea-4a0d-913d-a78c8337234c.lovable.app-1781430239395.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell />
    </QueryClientProvider>
  );
}

function SiteShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <PageTransitionOverlay />
    </div>
  );
}

function PageTransitionOverlay() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [active, setActive] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    setActive(true);
    const t = setTimeout(() => setActive(false), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none fixed inset-0 z-[100] bg-black transition-opacity duration-300 ease-in-out " +
        (active ? "opacity-100" : "opacity-0")
      }
    />
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/activities", label: "Activities" },
  { to: "/notices", label: "Notices" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={nccLogo} alt="NCC Logo" width={36} height={36} className="h-9 w-9 rounded-sm object-cover" />
          <span className="flex flex-col leading-tight"> 
            <span className="font-display text-base text-foreground whitespace-pre-line">NCC COLLEGE OF ENGINEERING ALAPPUZHA </span>
          </span> 
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border/60 text-foreground/80 hover:text-foreground hover:bg-accent/10 transition"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/login"
            className="ml-3 inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Cadet Login
            <span aria-hidden>→</span>
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-border/60 text-foreground/80"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/login"
            className="rounded-sm bg-primary px-3 py-2 text-xs font-medium text-primary-foreground"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[color:var(--olive-deep)] text-primary-foreground/90 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Unity & Discipline</div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            The National Cadet Corps unit at our college trains young women and men into responsible citizens through drill, adventure, and service.
          </p>
        </div>
        <div>
          <div className="label-eyebrow text-primary-foreground/60">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-[color:var(--brass)] transition">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label-eyebrow text-primary-foreground/60">Connect</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/ncc_cemp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[color:var(--brass)] transition"
              >
                <Instagram className="h-4 w-4" />
                @ncc_cemp
              </a>
            </li>
          </ul>
          <div className="label-eyebrow text-primary-foreground/60 mt-6">
            UNIT HQ
            <br />
            College of Engineering and Management Punnapra
            <br />
            <br />
          </div>
          <address className="mt-4 not-italic text-sm text-primary-foreground/70 leading-relaxed">
            NCC Office, Block C<br/>
            College Campus<br/>
            Kerala 682011<br/>
            ncc@college.edu
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/50 font-mono">
          <span>© {new Date().getFullYear()} NCC College Unit</span>
          <span>Ekta aur Anushasan · एकता और अनुशासन</span>
        </div>
      </div>
    </footer>
  );
}
