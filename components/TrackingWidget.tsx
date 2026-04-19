"use client";

import { FormEvent, useMemo, useState } from "react";
import { shipments } from "@/lib/data";

export function TrackingWidget() {
  const [trackingInput, setTrackingInput] = useState("");
  const [searchedId, setSearchedId] = useState("");

  const trackingResult = useMemo(() => {
    const trimmedId = searchedId.trim().toUpperCase();
    if (!trimmedId) return null;
    return shipments.find((shipment) => shipment.id === trimmedId) ?? "not_found";
  }, [searchedId]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchedId(trackingInput);
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5 backdrop-blur transition hover:border-cyan-300/30">
      <h2 className="text-lg font-semibold text-white">Track a Shipment</h2>
      <p className="mt-1 text-sm text-slate-300">Try IDs like FL-14108 or FL-14126.</p>

      <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <input
          type="text"
          value={trackingInput}
          onChange={(event) => setTrackingInput(event.target.value)}
          placeholder="Enter tracking number"
          className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Check Status
        </button>
      </form>

      <div className="mt-4 min-h-16 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
        {!trackingResult && <p className="text-sm text-slate-400">Waiting for tracking ID...</p>}

        {trackingResult === "not_found" && (
          <p className="text-sm text-rose-300 animate-fade-slide-up">No shipment found for this tracking number.</p>
        )}

        {trackingResult && trackingResult !== "not_found" && (
          <div className="space-y-2 text-sm animate-fade-slide-up">
            <p className="text-slate-200">
              Shipment <span className="font-semibold text-white">{trackingResult.id}</span>
            </p>
            <p className="text-slate-300">Route: {trackingResult.origin} → {trackingResult.destination}</p>
            <p className="text-slate-300">ETA: {trackingResult.eta}</p>
            <p>
              Status:{" "}
              <span className="font-semibold text-cyan-300">{trackingResult.status}</span>
            </p>
            <div className="pt-1">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: `${trackingResult.progress}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-slate-400">Journey progress: {trackingResult.progress}%</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
