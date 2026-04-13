export interface CohortMetric {
  label: string;
  value: string;
}

export interface CohortGalleryImage {
  src: string;
  alt: string;
  blurDataURL?: string;
}

export interface CohortRecord {
  id: string;
  number: string; // e.g. "1.0", "2.0", "3.0"
  year: number;
  launchDate: string;
  theme: string;
  highlights: string[];
  focus: string;
  status?: "Active" | "Completed";
  youtubeId?: string;
  gallery: CohortGalleryImage[];
  metrics: CohortMetric[];
  startups?: number;
  mentors?: number;
  successRate?: string;
}
