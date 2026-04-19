import { AppShell } from "@/components/AppShell";
import { CompanyProfile } from "@/components/CompanyProfile";
import { FleetShowcase } from "@/components/FleetShowcase";
import { MetricCards } from "@/components/MetricCards";

const analyticsHighlights = [
  { label: "On-Time Rate", value: "94.7%", delta: "+1.8% vs last week" },
  { label: "Avg Transit Time", value: "2.9 days", delta: "-0.3 days improvement" },
  { label: "Delayed Recovery", value: "87%", delta: "+4.2% this month" },
];

const lanePerformance = [
  { lane: "LA → Dallas", score: 92 },
  { lane: "NY → Chicago", score: 97 },
  { lane: "Seattle → Phoenix", score: 83 },
  { lane: "Miami → Atlanta", score: 95 },
];

export default function AnalyticsPage() {
  return (
    <AppShell
      section="Analytics"
      title="Performance & Trend Analytics"
      description="Monitor service reliability, lane efficiency, and delay recovery in a unified view."
    >
      <MetricCards />

      <section className="grid gap-4 md:grid-cols-3">
        {analyticsHighlights.map((highlight) => (
          <article
            key={highlight.label}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5"
          >
            <p className="text-sm text-slate-300">{highlight.label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{highlight.value}</p>
            <p className="mt-1 text-xs text-cyan-300">{highlight.delta}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5">
        <h3 className="text-base font-semibold text-white">Lane Performance Index</h3>
        <p className="mt-1 text-sm text-slate-300">Service quality score by highest-volume shipping lanes.</p>

        <div className="mt-4 space-y-3">
          {lanePerformance.map((lane) => (
            <div key={lane.lane}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-slate-200">{lane.lane}</span>
                <span className="font-semibold text-cyan-200">{lane.score}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  style={{ width: `${lane.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CompanyProfile />
      <FleetShowcase />
    </AppShell>
  );
}
