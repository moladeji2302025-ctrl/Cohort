"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Sector = "All" | "Agri-tech" | "AI" | "Telecommunications" | "Mining" | "Space-tech";

interface AlumniStartup {
  id: string;
  name: string;
  sector: Exclude<Sector, "All">;
  cohort: string;
  shortBio: string;
  logoInitials: string;
  logoColor: string;
}

const SECTORS: Sector[] = [
  "All",
  "Agri-tech",
  "AI",
  "Telecommunications",
  "Mining",
  "Space-tech",
];

const ALUMNI: AlumniStartup[] = [
  {
    id: "agrovsat",
    name: "AgrovSat",
    sector: "Agri-tech",
    cohort: "2.0",
    shortBio: "Satellite-powered precision agriculture for smallholder farmers.",
    logoInitials: "AS",
    logoColor: "#2d8a4e",
  },
  {
    id: "skybridge",
    name: "SkyBridge Connect",
    sector: "Telecommunications",
    cohort: "1.0",
    shortBio: "Expanding last-mile broadband connectivity in rural Nigeria.",
    logoInitials: "SC",
    logoColor: "#1a5ea8",
  },
  {
    id: "neurospace",
    name: "NeuroSpace AI",
    sector: "AI",
    cohort: "3.0",
    shortBio: "AI-driven satellite image analysis for urban planning.",
    logoInitials: "NS",
    logoColor: "#7c3aed",
  },
  {
    id: "terrasat",
    name: "TerraSat Mining",
    sector: "Mining",
    cohort: "3.0",
    shortBio: "Using NigComSat-1R data for mineral prospecting.",
    logoInitials: "TM",
    logoColor: "#b45309",
  },
  {
    id: "orbitfarms",
    name: "OrbitFarms",
    sector: "Agri-tech",
    cohort: "2.0",
    shortBio: "Remote sensing to predict crop yields and drought patterns.",
    logoInitials: "OF",
    logoColor: "#059669",
  },
  {
    id: "aionspace",
    name: "AiOnSpace",
    sector: "AI",
    cohort: "3.0",
    shortBio: "Natural language processing for satellite telemetry data.",
    logoInitials: "AO",
    logoColor: "#0891b2",
  },
  {
    id: "comsatlink",
    name: "ComsatLink",
    sector: "Telecommunications",
    cohort: "1.0",
    shortBio: "VSAT solutions for enterprise and government clients.",
    logoInitials: "CL",
    logoColor: "#2563eb",
  },
  {
    id: "spacetrace",
    name: "SpaceTrace",
    sector: "Space-tech",
    cohort: "1.0",
    shortBio: "Ground station monitoring and satellite tracking software.",
    logoInitials: "ST",
    logoColor: "#008751",
  },
  {
    id: "deepsoil",
    name: "DeepSoil Analytics",
    sector: "Mining",
    cohort: "2.0",
    shortBio: "Hyperspectral analysis for soil and mineral classification.",
    logoInitials: "DA",
    logoColor: "#92400e",
  },
  {
    id: "farmview",
    name: "FarmView NG",
    sector: "Agri-tech",
    cohort: "1.0",
    shortBio:
      "Drone + satellite imagery for large-scale farm monitoring.",
    logoInitials: "FV",
    logoColor: "#16a34a",
  },
  {
    id: "omniai",
    name: "OmniAI Systems",
    sector: "AI",
    cohort: "2.0",
    shortBio: "Computer vision applied to infrastructure inspection.",
    logoInitials: "OA",
    logoColor: "#6d28d9",
  },
  {
    id: "orbitvision",
    name: "OrbitVision",
    sector: "Space-tech",
    cohort: "3.0",
    shortBio: "Real-time satellite imagery API for developers.",
    logoInitials: "OV",
    logoColor: "#0f766e",
  },
];

function StartupCard({ startup }: { startup: AlumniStartup }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center aspect-square cursor-pointer rounded-sm border overflow-hidden"
      style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 100 }}
      role="article"
      aria-label={`${startup.name} — ${startup.sector} — Cohort ${startup.cohort}`}
    >
      {/* Logo */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-xl mb-2"
        style={{ backgroundColor: startup.logoColor }}
        aria-hidden="true"
      >
        {startup.logoInitials}
      </div>
      <span className="text-xs font-semibold text-gray-700 text-center px-2">
        {startup.name}
      </span>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center text-white"
            style={{ backgroundColor: "rgba(0,135,81,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="font-bold text-sm mb-1">{startup.name}</div>
            <div className="text-xs opacity-80 mb-2">{startup.sector}</div>
            <div className="text-xs opacity-90 leading-relaxed">
              {startup.shortBio}
            </div>
            <div className="mt-2 text-xs opacity-70">Cohort {startup.cohort}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AlumniBento() {
  const [activeSector, setActiveSector] = useState<Sector>("All");

  const filtered =
    activeSector === "All"
      ? ALUMNI
      : ALUMNI.filter((a) => a.sector === activeSector);

  return (
    <section
      id="alumni"
      className="py-20"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Alumni and startup directory"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "#008751" }}
          >
            Alumni &amp; Startup Directory
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the innovative ventures that have emerged from the NigComSat
            Accelerator ecosystem.
          </p>
        </motion.div>

        {/* Filter bar */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="group"
          aria-label="Filter startups by sector"
        >
          {SECTORS.map((sector) => (
            <motion.button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={`px-4 py-2 text-sm font-semibold rounded border-2 transition-colors`}
              style={
                activeSector === sector
                  ? {
                      backgroundColor: "#008751",
                      borderColor: "#008751",
                      color: "#ffffff",
                    }
                  : {
                      backgroundColor: "transparent",
                      borderColor: "#e5e7eb",
                      color: "#1a1a1a",
                    }
              }
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              aria-pressed={activeSector === sector}
              aria-label={`Filter by ${sector}`}
            >
              {sector}
            </motion.button>
          ))}
        </div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          layout
          aria-live="polite"
          aria-label="Startup grid"
        >
          <AnimatePresence>
            {filtered.map((startup) => (
              <motion.div
                key={startup.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <StartupCard startup={startup} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No startups found for this sector.
          </div>
        )}
      </div>
    </section>
  );
}
