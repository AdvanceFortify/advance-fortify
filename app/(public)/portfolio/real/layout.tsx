import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Portfolio - Client Projects | Advance Fortify",
  description: "Browse realistic client projects across industries with proven results and tailored branding solutions.",
  alternates: {
    canonical: '/portfolio/real',
  },
};

export default function RealPortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
