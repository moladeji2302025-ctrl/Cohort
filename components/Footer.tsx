import Link from "next/link";

const footerColumns = [
  {
    heading: "Contact",
    links: [
      { label: "NigComSat HQ, Abuja, Nigeria", href: "#" },
      { label: "+234 (0) 9 876 5432", href: "tel:+2349876543210" },
      { label: "info@nigcomsat.gov.ng", href: "mailto:info@nigcomsat.gov.ng" },
      { label: "Accelerator Portal", href: "https://nigcomsat.gov.ng/accelerator" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Satellite Communication", href: "#" },
      { label: "Broadband Services", href: "#" },
      { label: "VSAT Solutions", href: "#" },
      { label: "Earth Observation", href: "#" },
    ],
  },
  {
    heading: "Events",
    links: [
      { label: "Satellite Week 2026", href: "#" },
      { label: "Demo Day 3.0", href: "#" },
      { label: "Alumni Meetup", href: "#" },
      { label: "Tech Summit", href: "#" },
    ],
  },
  {
    heading: "Info",
    links: [
      { label: "About NigComSat", href: "https://nigcomsat.gov.ng/about" },
      { label: "Accelerator Program", href: "https://nigcomsat.gov.ng/accelerator" },
      { label: "Press Releases", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="text-gray-300"
      style={{ backgroundColor: "#1a1a1a" }}
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: "#008751" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Badges / Emblems */}
        <div className="flex items-center gap-4">
          {/* Nigerian Coat of Arms placeholder */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border border-white/20"
            style={{ backgroundColor: "#008751" }}
            title="Nigerian Coat of Arms"
            aria-label="Nigerian Coat of Arms — placeholder"
          >
            NG
          </div>
          {/* ISO 9001 badge placeholder */}
          <div
            className="px-3 py-1 rounded text-xs font-semibold border border-white/20 text-white/60"
            title="ISO 9001:2015 Certified"
            aria-label="ISO 9001:2015 Certified — placeholder"
          >
            ISO 9001:2015
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          &copy; 2026 Nigerian Communications Satellite Limited (NIGCOMSAT).
          All rights reserved.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> &mdash; </span>
          A Federal Government of Nigeria Agency.
        </p>

        {/* Social / secondary links */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <Link href="#" className="hover:text-white transition-colors">
            Twitter/X
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}
