import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import hero from "../assets/g3.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Cadet Portal — NCC Unit" },
      {
        name: "description",
        content: "Secure login for cadets, teachers and administrators of the college NCC unit.",
      },
      { property: "og:title", content: "Cadet Portal — NCC Unit" },
      { property: "og:description", content: "Login for cadets, teachers and admins." },
    ],
  }),
  component: LoginPage,
});

const ROLES = [
  { id: "cadet", label: "Cadet", hint: "Reg. No. + Password" },
  { id: "teacher", label: "Teacher", hint: "Faculty Email + Password" },
  { id: "admin", label: "Admin", hint: "ANO credentials" },
] as const;

function LoginPage() {
  const [role, setRole] = useState<(typeof ROLES)[number]["id"]>("cadet");
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const id = String(f.get("id") || "");
    const pw = String(f.get("pw") || "");
    if (!id || pw.length < 4) {
      setError("Enter a valid ID and a password of at least 4 characters.");
      return;
    }
    setError(null);
    nav({ to: "/" });
  }

  return (
    <div className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--olive-deep)]/80 via-[color:var(--olive-deep)]/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-12 text-primary-foreground">
          <div className="label-eyebrow text-[color:var(--brass)]">Secure Portal</div>
          <h2 className="mt-3 font-display text-5xl leading-tight max-w-md">
            One uniform.
            <br />
            Three doors.
          </h2>
          <p className="mt-4 max-w-sm text-primary-foreground/75">
            Cadets, instructors and administrators each enter the system through their own
            role-specific gateway.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 md:p-12">
        <form onSubmit={submit} className="w-full max-w-md">
          <div className="label-eyebrow text-muted-foreground">Authentication</div>
          <h1 className="mt-2 font-display text-4xl">Identify yourself.</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Select your role, then sign in with credentials issued by the unit office.
          </p>

          <div
            role="tablist"
            className="mt-8 grid grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden"
          >
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={role === r.id}
                onClick={() => setRole(r.id)}
                className={
                  "px-4 py-3 text-sm font-medium transition " +
                  (role === r.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground/70 hover:bg-secondary")
                }
              >
                {r.label}
              </button>
            ))}
          </div>
          <p className="mt-2 label-eyebrow text-muted-foreground">
            {ROLES.find((r) => r.id === role)?.hint}
          </p>

          <div className="mt-8 space-y-5">
            <Field
              name="id"
              label={role === "cadet" ? "Registration No." : "Email"}
              type={role === "cadet" ? "text" : "email"}
              placeholder={role === "cadet" ? "NCC/2024/0421" : "name@college.edu"}
            />
            <Field name="pw" label="Password" type="password" placeholder="••••••••" />
          </div>

          {error && (
            <div className="mt-5 rounded-sm border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="mt-8 w-full rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Sign in as {ROLES.find((r) => r.id === role)?.label}
          </button>

          <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Forgot password?
            </a>
            <a href="#" className="hover:text-foreground">
              Request access
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type,
  placeholder,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="label-eyebrow text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </label>
  );
}
