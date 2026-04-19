import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Leader Logistics Dashboard",
  description: "Modern logistics control center for shipment monitoring and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
