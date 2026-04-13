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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a1a1a" }}
      >
        {children}
      </body>
    </html>
  );
}
