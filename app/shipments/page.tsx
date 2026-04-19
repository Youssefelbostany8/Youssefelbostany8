import { AppShell } from "@/components/AppShell";
import { ShipmentsTable } from "@/components/ShipmentsTable";
import { TrackingWidget } from "@/components/TrackingWidget";

export default function ShipmentsPage() {
  return (
    <AppShell
      section="Shipments"
      title="Shipment Monitoring Center"
      description="Search individual packages and review active lanes from one responsive control panel."
    >
      <TrackingWidget />
      <ShipmentsTable />
    </AppShell>
  );
}
