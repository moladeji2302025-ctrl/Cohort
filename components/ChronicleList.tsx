"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";
import type { CohortRecord } from "@/types/cohort";

interface ChronicleListProps {
  cohorts: CohortRecord[];
}

function CohortCard({
  cohort,
  reversed,
}: {
  cohort: CohortRecord;
  reversed: boolean;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.article
        id={cohort.id}
        className="bg-white border border-gray-100 shadow-sm rounded-none overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label={`Cohort ${cohort.number} — ${cohort.theme}`}
      >
        {/* Cohort header stripe */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{
            background:
              "linear-gradient(to right, #0082E6, #2B6BE2, #4E49E0, #6339D9, #7B28CF)",
          }}
        >
          <div>
            <span className="text-white text-xs font-semibold uppercase tracking-widest opacity-80">
              Cohort
            </span>
            <h2 className="text-white font-extrabold text-2xl leading-tight">
              {cohort.number} — {cohort.theme}
            </h2>
          </div>
          {cohort.status && (
            <span
              className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wide ${
                cohort.status === "Active"
                  ? "bg-white text-[#4E49E0]"
                  : "bg-white/20 text-white"
              }`}
            >
              {cohort.status}
            </span>
          )}
        </div>

        {/* Main content */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
            reversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Media column */}
          <div className={`${reversed ? "lg:[direction:ltr]" : ""}`}>
            {/* YouTube embed */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${cohort.youtubeId}`}
                title={`Cohort ${cohort.number} — ${cohort.theme} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>

            {/* 4-image mini gallery */}
            <div className="grid grid-cols-2 gap-1 p-1 bg-gray-50">
              {cohort.gallery.map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* View gallery button */}
            <div className="p-4 bg-gray-50">
              <motion.button
                onClick={() => setLightboxOpen(true)}
                className="w-full py-2 text-sm font-semibold border-2 rounded transition-colors"
                style={{ borderColor: "#4E49E0", color: "#4E49E0" }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(78,73,224,0.06)" }}
                transition={{ type: "spring", stiffness: 100 }}
                aria-label={`View full gallery for Cohort ${cohort.number}`}
              >
                View Gallery ↗
              </motion.button>
            </div>
          </div>

          {/* Text / data column */}
          <div
            className={`flex flex-col justify-between p-6 lg:p-8 ${
              reversed ? "lg:[direction:ltr]" : ""
            }`}
          >
            {/* Launch info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="h-0.5 w-8"
                  style={{ backgroundColor: "#4E49E0" }}
                />
                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  {cohort.launchDate}
                </span>
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {cohort.focus}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {cohort.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span
                      className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs"
                      style={{
                        background:
                          "linear-gradient(to right, #0082E6, #2B6BE2, #4E49E0, #6339D9, #7B28CF)",
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {hl}
                  </li>
                ))}
              </ul>

              {/* Metrics data grid */}
              <div
                className="grid grid-cols-2 gap-3 p-4 rounded"
                style={{ backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb" }}
              >
                {cohort.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {m.label}
                    </div>
                    <div
                      className="text-sm font-bold mt-0.5"
                      style={{ color: "#1a1a1a" }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics bar */}
            <div
              className="mt-6 flex items-center justify-around py-4 border-t"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="text-center">
                <div
                  className="text-xl font-extrabold"
                  style={{
                    background:
                      "linear-gradient(to right, #0082E6, #2B6BE2, #4E49E0, #6339D9, #7B28CF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {cohort.startups ?? "—"}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mt-0.5">
                  Startups
                </div>
              </div>
              <div
                className="h-8 w-px"
                style={{ backgroundColor: "#e5e7eb" }}
              />
              <div className="text-center">
                <div
                  className="text-xl font-extrabold"
                  style={{
                    background:
                      "linear-gradient(to right, #0082E6, #2B6BE2, #4E49E0, #6339D9, #7B28CF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {cohort.mentors ?? "—"}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mt-0.5">
                  Mentors
                </div>
              </div>
              <div
                className="h-8 w-px"
                style={{ backgroundColor: "#e5e7eb" }}
              />
              <div className="text-center">
                <div
                  className="text-xl font-extrabold"
                  style={{
                    background:
                      "linear-gradient(to right, #0082E6, #2B6BE2, #4E49E0, #6339D9, #7B28CF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {cohort.successRate ?? "—"}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mt-0.5">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <Lightbox
        images={cohort.gallery}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        cohortNumber={cohort.number}
      />
    </>
  );
}

export default function ChronicleList({ cohorts }: ChronicleListProps) {
  return (
    <section
      id="chronicles"
      className="py-20"
      style={{ backgroundColor: "#f3f4f6" }}
      aria-label="Cohort chronicles and timeline"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{
              background:
                "linear-gradient(to right, #0082E6, #2B6BE2, #4E49E0, #6339D9, #7B28CF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Cohort Chronicles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured timeline of every NigComSat Accelerator cohort —
            their themes, milestones, and impact.
          </p>
        </motion.div>

        {/* Cohort cards */}
        <div className="space-y-10">
          {cohorts.map((cohort, index) => (
            <CohortCard
              key={cohort.id}
              cohort={cohort}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
