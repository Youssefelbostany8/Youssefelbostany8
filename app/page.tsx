import { AppShell } from "@/components/AppShell";
import { MetricCards } from "@/components/MetricCards";
import { ShipmentsTable } from "@/components/ShipmentsTable";
import { TrackingWidget } from "@/components/TrackingWidget";

export default function Home() {
  return (
    <AppShell
      section="Dashboard"
      title="Real-Time Logistics Insights"
      description="Track operational health, monitor fulfillment velocity, and react to disruptions faster."
    >
      <MetricCards />
      <TrackingWidget />
      <ShipmentsTable />
    </AppShell>
  );
}
