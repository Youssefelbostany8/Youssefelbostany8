import Image from "next/image";

const fleetItems = [
  { title: "Vans", subtitle: "Small order delivery", image: "/fleet/van.svg" },
  { title: "Medium Trucks", subtitle: "Regional freight", image: "/fleet/medium-truck.svg" },
  { title: "Heavy Trucks", subtitle: "Long-haul lane coverage", image: "/fleet/heavy-truck.svg" },
  { title: "Special Cargo Jet", subtitle: "Priority special order", image: "/fleet/cargo-jet.svg" },
];

export function FleetShowcase() {
  return (
    <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5">
      <h3 className="text-base font-semibold text-white">Future Leader Fleet</h3>
      <p className="mt-1 text-sm text-slate-300">
        Premium multimodal fleet supporting last-mile through special cargo operations.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {fleetItems.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/10 bg-slate-950/50 p-3 transition hover:border-cyan-300/40"
          >
            <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/40">
              <Image
                src={item.image}
                alt={`${item.title} fleet visual`}
                width={800}
                height={360}
                className="h-36 w-full object-cover"
              />
            </div>
            <p className="mt-3 font-semibold text-white">{item.title}</p>
            <p className="text-xs text-slate-300">{item.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
