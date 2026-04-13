"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { CohortGalleryImage } from "@/types/cohort";

interface LightboxProps {
  images: CohortGalleryImage[];
  isOpen: boolean;
  onClose: () => void;
  cohortNumber: string;
}

export default function Lightbox({
  images,
  isOpen,
  onClose,
  cohortNumber,
}: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Cohort ${cohortNumber} photo gallery`}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80"
            onClick={onClose}
            aria-label="Close gallery"
          />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ backgroundColor: "#008751" }}
            >
              <h2 className="text-white font-bold text-lg">
                Cohort {cohortNumber} — Photo Gallery
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors text-2xl leading-none"
                aria-label="Close gallery"
              >
                &times;
              </button>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 gap-2 p-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video overflow-hidden rounded"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
