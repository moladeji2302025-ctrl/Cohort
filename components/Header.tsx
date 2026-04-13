"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-1 transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: "#008751",
        }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Top bar */}
        <div
          className="w-full text-white text-xs py-2 px-4"
          style={{ backgroundColor: "#008751" }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="font-medium tracking-wide">
              Federal Republic of Nigeria — Official Government Website
            </span>
            <nav aria-label="Utility navigation">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    href="https://nigcomsat.gov.ng"
                    className="hover:underline focus:underline"
                    aria-label="NIGCOMSAT main site"
                  >
                    NIGCOMSAT.gov.ng
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://nigeria.gov.ng"
                    className="hover:underline focus:underline"
                    aria-label="Nigeria government portal"
                  >
                    Nigeria.gov.ng
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main nav */}
        <div
          className={`w-full bg-white transition-shadow duration-300 ${
            isScrolled ? "shadow-md" : "shadow-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: "#008751" }}
                aria-hidden="true"
              >
                N
              </div>
              <div>
                <div
                  className="font-bold text-lg leading-tight"
                  style={{ color: "#008751" }}
                >
                  NIGCOMSAT
                </div>
                <div className="text-xs text-gray-500">
                  Accelerator — History &amp; Alumni
                </div>
              </div>
            </div>

            {/* Nav links */}
            <nav aria-label="Main navigation">
              <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                <li>
                  <Link
                    href="/history"
                    className="hover:text-[#008751] transition-colors"
                    style={{ color: "#1a1a1a" }}
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/history#chronicles"
                    className="hover:text-[#008751] transition-colors"
                    style={{ color: "#1a1a1a" }}
                  >
                    Cohorts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/history#alumni"
                    className="hover:text-[#008751] transition-colors"
                    style={{ color: "#1a1a1a" }}
                  >
                    Alumni
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Ghost button */}
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link
                  href="https://nigcomsat.gov.ng/accelerator"
                  className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded border-2 transition-colors duration-200"
                  style={{
                    borderColor: "#008751",
                    color: "#008751",
                    backgroundColor: "transparent",
                  }}
                  aria-label="Back to NIGCOMSAT Accelerator Home"
                >
                  ← Back to Accelerator Home
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link
                  href="/history"
                  className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded border-2 transition-colors duration-200"
                  style={{
                    borderColor: "#008751",
                    color: "#008751",
                    backgroundColor: "transparent",
                  }}
                  aria-label="Portal Home"
                >
                  Portal Home
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
