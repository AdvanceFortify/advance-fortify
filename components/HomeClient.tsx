"use client";

import React from "react";
import Hero3D from "./Hero3D";

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "64px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ margin: 0, fontSize: "clamp(26px, 3.2vw, 42px)" }}>{title}</h2>
        {subtitle ? (
          <p style={{ marginTop: 12, opacity: 0.8, maxWidth: "70ch" }}>{subtitle}</p>
        ) : null}
        <div style={{ marginTop: 26 }}>{children}</div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <main>
      <Hero3D />

      <Section
        title="What we build"
        subtitle="Clear services for real businesses — structured for trust, speed, and SEO."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {[
            { t: "Landing Pages", d: "One page focused on leads. Perfect for offers and ads." },
            { t: "Business Websites", d: "Multi-page structure: services, about, proof, contact." },
            { t: "Local SEO Websites", d: "Designed for local intent: location, services, trust signals." },
            { t: "Redesign & Optimization", d: "Upgrade speed, structure, UX — and fix what’s blocking conversions." },
          ].map((c) => (
            <div
              key={c.t}
              style={{
                borderRadius: 22,
                padding: 18,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: 18, lineHeight: 1.2 }}>{c.t}</div>
              <div style={{ marginTop: 10, opacity: 0.8 }}>{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How it works" subtitle="Simple process. Clear communication. No marketing fluff.">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {[
            { n: "01", t: "Quick call", d: "We clarify the offer, audience, and goal in minutes." },
            { n: "02", t: "Build + review", d: "We ship a first version fast. You review. We refine." },
            { n: "03", t: "Launch + SEO", d: "Deploy on Vercel, basics done right, ready to scale." },
          ].map((s) => (
            <div
              key={s.n}
              style={{
                borderRadius: 22,
                padding: 18,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: 12, letterSpacing: "0.12em", opacity: 0.65 }}>{s.n}</div>
              <div style={{ marginTop: 10, fontSize: 18 }}>{s.t}</div>
              <div style={{ marginTop: 10, opacity: 0.8 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Proof" subtitle="Explore our style directions — then jump into the portfolio.">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 14px",
              borderRadius: 999,
              textDecoration: "none",
              background: "rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            View Portfolio →
          </a>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 14px",
              borderRadius: 999,
              textDecoration: "none",
              background: "rgba(212,175,55,0.10)",
              boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.18)",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Contact →
          </a>
        </div>
      </Section>
    </main>
  );
}
