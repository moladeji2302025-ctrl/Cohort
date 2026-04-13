"use client";

import { motion } from "framer-motion";

export default function HeroHistory() {
  return (
    <section
      className="relative w-full min-h-[560px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section — NIGCOMSAT Accelerator History"
    >
      {/* Background with darkened satellite dish style */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a2e1a 0%, #1a3a2a 50%, #0a2e1a 100%)",
        }}
        aria-hidden="true"
      />

      {/* Green overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 135, 81, 0.20)" }}
        aria-hidden="true"
      />

      {/* Decorative satellite dish SVG pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 560"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="400"
            cy="280"
            r="200"
            fill="none"
            stroke="#008751"
            strokeWidth="2"
          />
          <circle
            cx="400"
            cy="280"
            r="150"
            fill="none"
            stroke="#008751"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="280"
            r="100"
            fill="none"
            stroke="#008751"
            strokeWidth="1"
          />
          <line x1="400" y1="80" x2="400" y2="480" stroke="#008751" strokeWidth="1" />
          <line x1="200" y1="280" x2="600" y2="280" stroke="#008751" strokeWidth="1" />
          <line x1="259" y1="139" x2="541" y2="421" stroke="#008751" strokeWidth="0.5" />
          <line x1="541" y1="139" x2="259" y2="421" stroke="#008751" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className="inline-block text-xs uppercase tracking-widest font-semibold mb-4 px-3 py-1 rounded"
            style={{
              color: "#008751",
              backgroundColor: "rgba(0, 135, 81, 0.15)",
              border: "1px solid rgba(0, 135, 81, 0.3)",
            }}
          >
            Official Archive
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            style={{ color: "#008751" }}
          >
            The Legacy of Innovation
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Documenting the evolution of NigComSat&apos;s flagship accelerator
            program from 2024 to the present.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#chronicles"
              className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded text-sm transition-colors"
              style={{ backgroundColor: "#008751" }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100 }}
              aria-label="Explore cohort chronicles"
            >
              Explore Cohort Chronicles
            </motion.a>
            <motion.a
              href="#alumni"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded text-sm border-2 transition-colors"
              style={{
                borderColor: "#008751",
                color: "#008751",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100 }}
              aria-label="View alumni directory"
            >
              Alumni Directory
            </motion.a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { value: "3", label: "Cohorts Launched" },
            { value: "35+", label: "Startups Supported" },
            { value: "2024–", label: "Program Span" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-extrabold"
                style={{ color: "#008751" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-300 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
