import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIGCOMSAT Accelerator | Official History & Alumni",
  description:
    "The official history and alumni portal for the NigComSat Accelerator Program — documenting every cohort from 2024 to the present.",
  openGraph: {
    title: "NIGCOMSAT Accelerator | Official History & Alumni",
    description:
      "Documenting the evolution of NigComSat's flagship accelerator program from 2024 to the present.",
    type: "website",
    siteName: "NIGCOMSAT Accelerator Portal",
    locale: "en_NG",
  },
  keywords: [
    "NIGCOMSAT",
    "accelerator",
    "Nigeria",
    "space technology",
    "startup",
    "alumni",
    "cohort",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#1a1a1a",
        }}
      >
        {children}
      </body>
    </html>
  );
}
