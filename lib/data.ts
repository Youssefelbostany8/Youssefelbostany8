export type ShipmentStatus = "Delivered" | "In Transit" | "Delayed";

export type Shipment = {
  id: string;
  origin: string;
  destination: string;
  eta: string;
  progress: number;
  status: ShipmentStatus;
};

export const shipments: Shipment[] = [
  {
    id: "FL-14092",
    origin: "Los Angeles, CA",
    destination: "Dallas, TX",
    eta: "Apr 21, 2026",
    progress: 72,
    status: "In Transit",
  },
  {
    id: "FL-14108",
    origin: "New York, NY",
    destination: "Chicago, IL",
    eta: "Apr 20, 2026",
    progress: 100,
    status: "Delivered",
  },
  {
    id: "FL-14126",
    origin: "Seattle, WA",
    destination: "Phoenix, AZ",
    eta: "Apr 22, 2026",
    progress: 46,
    status: "Delayed",
  },
  {
    id: "FL-14133",
    origin: "Miami, FL",
    destination: "Atlanta, GA",
    eta: "Apr 21, 2026",
    progress: 68,
    status: "In Transit",
  },
  {
    id: "FL-14151",
    origin: "Denver, CO",
    destination: "San Diego, CA",
    eta: "Apr 23, 2026",
    progress: 51,
    status: "In Transit",
  },
  {
    id: "FL-14160",
    origin: "Boston, MA",
    destination: "Nashville, TN",
    eta: "Apr 19, 2026",
    progress: 100,
    status: "Delivered",
  },
];
