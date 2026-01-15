import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Advance Fortify | Websites built to convert",
  description:
    "Advance Fortify builds fast, SEO-ready websites and landing pages focused on clarity, trust, and real business results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
