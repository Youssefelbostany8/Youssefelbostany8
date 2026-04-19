import { shipments } from "@/lib/data";

const statusClasses = {
  Delivered: "bg-emerald-400/15 text-emerald-300",
  "In Transit": "bg-blue-400/15 text-blue-300",
  Delayed: "bg-fuchsia-400/15 text-fuchsia-300",
};

export function ShipmentsTable() {
  return (
    <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5 backdrop-blur transition hover:border-cyan-300/30">
      <h2 className="text-lg font-semibold text-white">Active Shipments</h2>
      <p className="mt-1 text-sm text-slate-300">Operational stream snapshot for North America routes.</p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-slate-300">
              <th className="pb-3 font-medium">Tracking ID</th>
              <th className="pb-3 font-medium">Lane</th>
              <th className="pb-3 font-medium">ETA</th>
              <th className="pb-3 font-medium">Progress</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id} className="border-b border-white/5 text-slate-200 transition hover:bg-white/[0.04]">
                <td className="py-3 font-medium text-white">{shipment.id}</td>
                <td className="py-3">{shipment.origin} → {shipment.destination}</td>
                <td className="py-3">{shipment.eta}</td>
                <td className="py-3">
                  <div className="w-32">
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${shipment.progress}%` }} />
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{shipment.progress}%</p>
                  </div>
                </td>
                <td className="py-3">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold transition ${statusClasses[shipment.status]}`}
                  >
                    {shipment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
