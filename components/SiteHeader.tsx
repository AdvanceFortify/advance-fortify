"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="af-header">
      <div className="af-header-inner">
        <Link href="/" className="af-brand">
          ADVANCE FORTIFY
        </Link>

        <nav className="af-nav">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a
          href="https://wa.me/40773336173"
          target="_blank"
          className="af-cta"
        >
          Let’s talk
        </a>
      </div>

      <style jsx>{`
        .af-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
        }

        .af-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .af-brand {
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
        }

        .af-nav {
          display: flex;
          gap: 28px;
        }

        .af-nav a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 14px;
        }

        .af-nav a:hover {
          color: #fff;
        }

        .af-cta {
          padding: 8px 14px;
          border-radius: 999px;
          background: #fff;
          color: #000;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
}
