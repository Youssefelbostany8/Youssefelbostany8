import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

export function AppShell({
  section,
  title,
  description,
  children,
}: {
  section: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-5 p-4 md:grid-cols-[260px_1fr] md:p-6">
      <Sidebar />

      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 p-4 shadow-glow backdrop-blur-xl md:p-6">
        <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl animate-float [animation-delay:1s]" />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{section}</p>
              <h2 className="mt-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                {title}
              </h2>
              <p className="mt-1 text-sm text-slate-300">{description}</p>
            </div>

            <div className="flex items-center gap-2">
              <button className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10" type="button">
                Alerts 3
              </button>
              <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90" type="button">
                Create Shipment
              </button>
            </div>
          </div>

          <div className="animate-fade-slide-up">{children}</div>
        </div>
      </section>
    </main>
  );
}
