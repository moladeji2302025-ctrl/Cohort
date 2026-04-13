import type { CohortRecord } from "@/types/cohort";

export const cohorts: CohortRecord[] = [
  {
    id: "cohort-3",
    number: "3.0",
    year: 2026,
    launchDate: "February 2026",
    theme: "Scaling the Space Economy",
    highlights: [
      "Focus on Robotics, AI, and Mineral Resources",
      "Leveraging NigComSat-1R satellite data",
      "Cross-sector partnership expansion",
    ],
    focus:
      "Harnessing Nigeria's space assets to power robotics, AI, and mineral-resource discovery through NigComSat-1R imagery and telemetry data.",
    status: "Active",
    youtubeId: "dQw4w9WgXcQ", // placeholder — replace with official embed
    gallery: [
      {
        src: "https://placehold.co/600x400/008751/ffffff?text=Cohort+3.0+Launch",
        alt: "Cohort 3.0 Launch Event",
      },
      {
        src: "https://placehold.co/600x400/1a1a1a/ffffff?text=AI+Workshop",
        alt: "AI Workshop Session",
      },
      {
        src: "https://placehold.co/600x400/008751/ffffff?text=Robotics+Demo",
        alt: "Robotics Demonstration",
      },
      {
        src: "https://placehold.co/600x400/1a1a1a/ffffff?text=Mentor+Session",
        alt: "Mentor Engagement Session",
      },
    ],
    metrics: [
      { label: "Year of Launch", value: "2026" },
      { label: "Theme", value: "Scaling the Space Economy" },
      { label: "Status", value: "Active" },
      { label: "Focus Areas", value: "Robotics · AI · Mineral Resources" },
    ],
    startups: undefined,
    mentors: 30,
    successRate: "TBD",
  },
  {
    id: "cohort-2",
    number: "2.0",
    year: 2025,
    launchDate: "July 2025",
    theme: "Space-Enabled Solutions",
    highlights: [
      "Expansion into Agri-tech and Telemedicine",
      "Increased focus on Satellite Week showcase",
      "Pan-African startup partnerships",
    ],
    focus:
      "Connecting Nigeria's space infrastructure with everyday sectors — agriculture, health, and communications — to drive inclusive development.",
    status: "Completed",
    youtubeId: "dQw4w9WgXcQ", // placeholder — replace with official embed
    gallery: [
      {
        src: "https://placehold.co/600x400/008751/ffffff?text=Cohort+2.0+Open",
        alt: "Cohort 2.0 Opening Ceremony",
      },
      {
        src: "https://placehold.co/600x400/1a1a1a/ffffff?text=Satellite+Week",
        alt: "Satellite Week Showcase",
      },
      {
        src: "https://placehold.co/600x400/008751/ffffff?text=Agri-tech+Pitch",
        alt: "Agri-tech Startup Pitch",
      },
      {
        src: "https://placehold.co/600x400/1a1a1a/ffffff?text=Telemedicine+Demo",
        alt: "Telemedicine Demo Day",
      },
    ],
    metrics: [
      { label: "Year of Launch", value: "2025" },
      { label: "Launch Date", value: "July 2025" },
      { label: "Theme", value: "Space-Enabled Solutions" },
      { label: "Key Focus", value: "Agri-tech & Telemedicine" },
    ],
    startups: undefined,
    mentors: 25,
    successRate: "82%",
  },
  {
    id: "cohort-1",
    number: "1.0",
    year: 2024,
    launchDate: "February 2024",
    theme: "Laying the Foundation",
    highlights: [
      "281 applications received from across Nigeria",
      "35 startups selected for the inaugural cohort",
      "Core focus on satellite infrastructure and broadband accessibility",
    ],
    focus:
      "Establishing the bedrock of Nigeria's space-tech startup ecosystem through mentorship, capital access, and satellite infrastructure training.",
    status: "Completed",
    youtubeId: "dQw4w9WgXcQ", // placeholder — replace with official embed
    gallery: [
      {
        src: "https://placehold.co/600x400/008751/ffffff?text=Cohort+1.0+Launch",
        alt: "Cohort 1.0 Launch Ceremony",
      },
      {
        src: "https://placehold.co/600x400/1a1a1a/ffffff?text=Broadband+Workshop",
        alt: "Broadband Accessibility Workshop",
      },
      {
        src: "https://placehold.co/600x400/008751/ffffff?text=Demo+Day",
        alt: "Cohort 1.0 Demo Day",
      },
      {
        src: "https://placehold.co/600x400/1a1a1a/ffffff?text=281+Applications",
        alt: "281 Applications Milestone",
      },
    ],
    metrics: [
      { label: "Year of Launch", value: "2024" },
      { label: "Launch Date", value: "February 2024" },
      { label: "Applications", value: "281" },
      { label: "Startups Selected", value: "35" },
    ],
    startups: 35,
    mentors: 20,
    successRate: "78%",
  },
];
