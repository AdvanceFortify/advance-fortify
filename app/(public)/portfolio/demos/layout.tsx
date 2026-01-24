import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Portfolio - Style Concepts | Advance Fortify",
  description: "Explore our curated demo landing pages showcasing different design philosophies and UI approaches.",
  alternates: {
    canonical: '/portfolio/demos',
  },
};

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
