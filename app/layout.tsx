// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider } from "@/components/LanguageProvider";
import ParallaxBackground from "@/components/ParallaxBackground";

export const metadata: Metadata = {
  title: "Advance Fortify | Premium Web Design, SEO & Marketing",
  description:
    "Premium Next.js websites and landing pages built for speed, trust, and conversions.",
  metadataBase: new URL('https://advancefortify.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'ro': '/ro',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>
          <ParallaxBackground />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
