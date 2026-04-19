const metrics = [
  {
    label: "Total Shipments",
    value: "1,286",
    trend: "+8.4%",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    label: "Delivered",
    value: "964",
    trend: "+6.1%",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    label: "In Transit",
    value: "273",
    trend: "+2.7%",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    label: "Delayed",
    value: "49",
    trend: "-1.3%",
    accent: "from-violet-500 to-fuchsia-500",
  },
];

export function MetricCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
        >
          <div className="flex items-start justify-between">
            <p className="text-sm text-slate-300">{metric.label}</p>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-cyan-200">
              {metric.trend}
            </span>
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{metric.value}</p>
          <div className={`mt-5 h-1.5 rounded-full bg-gradient-to-r ${metric.accent} animate-glow-pulse`} />
        </article>
      ))}
    </section>
  );
}
