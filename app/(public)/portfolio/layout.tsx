import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Demo & Real Projects | Advance Fortify",
  description: "Explore our portfolio: demo UI concepts and real client projects with proven results across industries.",
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
