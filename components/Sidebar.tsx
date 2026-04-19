"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Shipments", href: "/shipments" },
  { label: "Analytics", href: "/analytics" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full rounded-2xl border border-white/10 bg-slate-950/65 p-5 shadow-glow backdrop-blur-xl md:sticky md:top-6 md:h-fit">
      <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.04] p-3">
        <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200">Future Leader</p>
        <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-xl font-bold text-transparent">
          Logistics OS
        </h1>
      </div>

      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/80 to-violet-500/80 text-white shadow-lg shadow-blue-500/20"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 rounded-xl border border-cyan-300/20 bg-cyan-500/10 p-3">
        <p className="text-xs font-semibold text-cyan-200">SLA Health</p>
        <p className="mt-1 text-2xl font-bold text-white">98.2%</p>
        <p className="text-xs text-cyan-100/80">On-time performance this week</p>
      </div>
    </aside>
  );
}
