"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

type ShipmentDraft = {
  sender: string;
  receiver: string;
  weight: string;
  type: string;
  destination: string;
};

const initialDraft: ShipmentDraft = {
  sender: "",
  receiver: "",
  weight: "",
  type: "",
  destination: "",
};

const shipmentFields: Array<{ key: keyof ShipmentDraft; label: string; fullRow?: boolean }> = [
  { key: "sender", label: "Sender" },
  { key: "receiver", label: "Receiver" },
  { key: "weight", label: "Weight (kg)" },
  { key: "type", label: "Type" },
  { key: "destination", label: "Destination", fullRow: true },
];

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shipmentDraft, setShipmentDraft] = useState<ShipmentDraft>(initialDraft);

  const handleCreateShipment = () => setIsModalOpen(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
    setShipmentDraft(initialDraft);
  };

  return (
    <>
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
                <button
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                  type="button"
                >
                  Alerts 3
                </button>
                <button
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                  type="button"
                  onClick={handleCreateShipment}
                >
                  Create Shipment
                </button>
              </div>
            </div>

            <div className="animate-fade-slide-up">{children}</div>

            <footer className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm">
              <p className="text-slate-200">
                <span className="font-semibold text-cyan-200">Vision:</span> Leading the future of global supply chains.
              </p>
              <p className="mt-1 text-slate-300">
                <span className="font-semibold text-cyan-200">Service Excellence:</span> 98.2% SLA Health with global lane coverage across multimodal networks.
              </p>
            </footer>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl border border-white/15 bg-slate-950 p-6 shadow-2xl shadow-blue-500/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">New Shipment</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Create Shipment Order</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg border border-white/15 px-3 py-1 text-sm text-slate-200 hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
              {shipmentFields.map((field) => (
                <label key={field.key} className={field.fullRow ? "sm:col-span-2" : ""}>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-300">
                    {field.label}
                  </span>
                  <input
                    required
                    value={shipmentDraft[field.key]}
                    onChange={(event) =>
                      setShipmentDraft((prev) => ({ ...prev, [field.key]: event.target.value }))
                    }
                    className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                </label>
              ))}

              <div className="flex justify-end gap-2 pt-2 sm:col-span-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  Save Shipment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
