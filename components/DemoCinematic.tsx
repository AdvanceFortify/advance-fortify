"use client";

import React, { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type DemoKey = "luxury-landing" | "business-website" | "ecommerce" | "local-service";

type DemoConfig = {
  key: DemoKey;
  label: string;
  headline: string;
  subheadline: string;
  bullets: string[];
  sections: Array<{
    title: string;
    text: string;
    points: string[];
  }>;
  vibe: string;
};

const EMAIL_TO = "admin@advancefortify.com";
const WHATSAPP_NUMBER = "40773336173"; // TODO: numarul tau

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildGmailComposeUrl(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TO}&su=${s}&body=${b}`;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useAccent(key: string) {
  return useMemo(() => {
    const options = [
      { a: "rgba(212, 175, 55, 0.55)", b: "rgba(212, 175, 55, 0.12)", c: "rgba(212,175,55,0.22)" }, // gold
      { a: "rgba(0, 229, 255, 0.40)", b: "rgba(0, 229, 255, 0.10)", c: "rgba(0,229,255,0.18)" }, // cyan
      { a: "rgba(176, 120, 255, 0.45)", b: "rgba(176, 120, 255, 0.12)", c: "rgba(176,120,255,0.20)" }, // violet
      { a: "rgba(255, 171, 64, 0.50)", b: "rgba(255, 171, 64, 0.12)", c: "rgba(255,171,64,0.20)" }, // amber
    ];
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
    return options[hash % options.length];
  }, [key]);
}

function TiltCard({
  title,
  text,
  points,
  accentKey,
}: {
  title: string;
  text: string;
  points: string[];
  accentKey: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 35, on: false });
  const accent = useAccent(accentKey);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const px = clamp((x / r.width) * 100, 0, 100);
    const py = clamp((y / r.height) * 100, 0, 100);

    const rotateY = ((x / r.width) - 0.5) * 14;
    const rotateX = ((y / r.height) - 0.5) * -12;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    setGlow({ x: px, y: py, on: true });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    setGlow((g) => ({ ...g, on: false }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setGlow((g) => ({ ...g, on: true }))}
      style={{
        position: "relative",
        borderRadius: 22,
        padding: 22,
        background: "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
        boxShadow: "0 30px 70px rgba(0,0,0,0.42), inset 0 0 0 1px rgba(255,255,255,0.06)",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        transition: "transform 180ms ease",
        minHeight: 220,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -2,
          opacity: glow.on ? 1 : 0,
          transition: "opacity 220ms ease",
          background: `radial-gradient(320px 220px at ${glow.x}% ${glow.y}%, ${accent.a}, transparent 60%)`,
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 420px at 20% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(900px 520px at 90% 120%, rgba(0,0,0,0.72), transparent 55%)",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 22,
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.07), inset 0 0 0 2px ${accent.b}`,
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", transform: "translateZ(22px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "rgba(212, 175, 55, 0.95)",
              boxShadow: "0 0 18px rgba(212,175,55,0.35)",
            }}
          />
          <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.65 }}>
            Highlight
          </span>
        </div>

        <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.15 }}>{title}</h3>
        <p style={{ marginTop: 10, opacity: 0.8, maxWidth: "60ch" }}>{text}</p>

        <ul style={{ marginTop: 12, paddingLeft: 18, opacity: 0.88 }}>
          {points.map((p) => (
            <li key={p} style={{ marginBottom: 8 }}>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DEMOS: Record<DemoKey, DemoConfig> = {
  "luxury-landing": {
    key: "luxury-landing",
    label: "Luxury Landing",
    headline: "A premium landing — built to convert fast.",
    subheadline:
      "This is an abstract demo direction: bold hero, clean structure, and CTAs that feel expensive but simple.",
    bullets: ["High-end visual tone", "Conversion-first sections", "Mobile-perfect spacing"],
    vibe: "Gold • cinematic • minimal",
    sections: [
      {
        title: "Hero that sells clarity",
        text: "One strong promise + one clear action. No fluff. The goal is to get the lead quickly.",
        points: ["Headline + subheadline that explain value", "2 CTAs (primary + secondary)", "Trust hints (delivery time, tech stack, process)"],
      },
      {
        title: "Show the offer without noise",
        text: "3–5 blocks that answer the buyer’s mental questions: what, why you, proof, and next step.",
        points: ["Offer snapshot (what’s included)", "Proof (portfolio / results)", "FAQ + final CTA"],
      },
      {
        title: "Fast contact with pre-filled intent",
        text: "WhatsApp + Email open with a ready message so clients don’t waste time thinking what to write.",
        points: ["WhatsApp prefilled", "Gmail compose prefilled", "Optional form later"],
      },
    ],
  },
  "business-website": {
    key: "business-website",
    label: "Business Website",
    headline: "A trust-first business website — clean and scalable.",
    subheadline:
      "This direction is for firms that need credibility + structure: services, about, proof, and contact — SEO-ready from day one.",
    bullets: ["Professional structure", "SEO-friendly pages", "Simple navigation for non-technical clients"],
    vibe: "Clean • structured • reliable",
    sections: [
      {
        title: "Clear navigation, no confusion",
        text: "We design pages so users find what they need instantly — especially on mobile.",
        points: ["Services overview", "About trust block", "Contact path always visible"],
      },
      {
        title: "SEO foundations baked in",
        text: "Metadata, headings, internal links, and performance — prepared to rank locally and scale internationally.",
        points: ["Unique page titles/descriptions", "Semantic sections", "Fast load + Core Web Vitals"],
      },
      {
        title: "Proof is the main currency",
        text: "Portfolio, case snippets, and concrete examples — the page earns trust without corporate vibes.",
        points: ["Portfolio grid", "Short 'how we work'", "FAQ for objections"],
      },
    ],
  },
  ecommerce: {
    key: "ecommerce",
    label: "E-commerce",
    headline: "An e-commerce concept — premium UX, product focus.",
    subheadline:
      "Abstract direction for stores that want modern UI and clarity: categories, product highlights, trust elements, and a smooth funnel.",
    bullets: ["Product-forward layout", "Trust blocks + reviews", "Fast UX patterns"],
    vibe: "Modern • product-first • smooth",
    sections: [
      {
        title: "Product story in 10 seconds",
        text: "We lead with the product value and remove friction from the first scroll.",
        points: ["Hero with product benefit", "Key differentiators", "Social proof above the fold"],
      },
      {
        title: "Clean catalog logic",
        text: "Users should browse without thinking: filters, categories, and clear pricing.",
        points: ["Category sections", "Feature highlights", "Shipping/returns clarity"],
      },
      {
        title: "Checkout friction is the enemy",
        text: "We keep the funnel short and obvious.",
        points: ["Single primary action", "Trust + security hints", "Mobile-first checkout flow"],
      },
    ],
  },
  "local-service": {
    key: "local-service",
    label: "Local Service",
    headline: "Local service demo — built for SEO & leads.",
    subheadline:
      "Best for Romania first: location trust, clear services, calls-to-action, and local ranking structure.",
    bullets: ["Local SEO structure", "Call/WhatsApp optimized", "Service pages designed for intent"],
    vibe: "Local • lead-gen • fast",
    sections: [
      {
        title: "Local trust signals",
        text: "Location + availability + real proof. People buy safety first.",
        points: ["Service area block", "Hours / response time", "Map/locations (later)"],
      },
      {
        title: "Service pages that rank",
        text: "Each service gets its own page with proper headings, FAQs, and intent keywords.",
        points: ["Service overview grid", "Dedicated service pages", "Local FAQ targeting"],
      },
      {
        title: "Calls-to-action everywhere (without spam)",
        text: "Sticky CTA + short forms. Visitors should contact you in one tap.",
        points: ["Sticky call button (later)", "WhatsApp prefill", "Gmail compose prefill"],
      },
    ],
  },
};

export default function DemoCinematic({ slug }: { slug: string }) {
  const router = useRouter();

  const config = (DEMOS as Record<string, DemoConfig>)[slug] as DemoConfig | undefined;

  // fallback: if someone types an unknown slug
  if (!config) {
    return (
      <main style={{ padding: "84px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: 0 }}>Demo not found</h1>
        <p style={{ opacity: 0.8, marginTop: 12 }}>
          This demo slug doesn’t exist. Go back to portfolio and choose a concept.
        </p>
        <button
          onClick={() => router.push("/portfolio")}
          style={{
            marginTop: 18,
            borderRadius: 999,
            padding: "12px 16px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.92)",
            cursor: "pointer",
          }}
        >
          Back to portfolio →
        </button>
      </main>
    );
  }

  const waMsg =
    `Hi! I want the "${config.label}" direction.\n` +
    `Budget: (write)\nTimeline: (write)\nBusiness: (write)\n` +
    `Demo: /demo/${config.key}`;

  const emailSubject = `Advance Fortify — I want the "${config.label}" direction`;
  const emailBody =
    `Hi Advance Fortify,\n\n` +
    `I want the "${config.label}" direction.\n\n` +
    `Budget: \nTimeline: \nBusiness: \n\n` +
    `Demo link: /demo/${config.key}\n\n` +
    `Thanks!`;

  const accent = useAccent(config.key);

  return (
    <main style={{ padding: "84px 24px", maxWidth: 1200, margin: "0 auto" }}>
      {/* cinematic background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background:
            `radial-gradient(900px 500px at 25% 10%, ${accent.a}, transparent 60%),` +
            `radial-gradient(900px 520px at 85% 85%, rgba(0,0,0,0.9), transparent 60%),` +
            `radial-gradient(1100px 700px at 50% 120%, rgba(255,255,255,0.05), transparent 60%)`,
          filter: "blur(10px)",
          opacity: 0.65,
        }}
      />

      {/* HERO */}
      <section style={{ marginBottom: 44 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
              opacity: 0.92,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "rgba(212,175,55,0.95)",
                boxShadow: "0 0 18px rgba(212,175,55,0.35)",
              }}
            />
            <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75 }}>
              Demo direction • {config.vibe}
            </span>
          </div>

          <button
            onClick={() => router.push("/portfolio")}
            style={{
              borderRadius: 999,
              padding: "10px 14px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.92)",
              cursor: "pointer",
            }}
          >
            ← Back to portfolio
          </button>
        </div>

        <h1 style={{ fontSize: "clamp(38px, 5vw, 72px)", margin: "18px 0 0", lineHeight: 0.98 }}>
          {config.headline}
        </h1>

        <p style={{ marginTop: 14, opacity: 0.82, maxWidth: "70ch", fontSize: "clamp(14px, 2vw, 18px)" }}>
          {config.subheadline}
        </p>

        <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 10 }}>
          {config.bullets.map((b) => (
            <span
              key={b}
              style={{
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
                opacity: 0.9,
                fontSize: 13,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a
            href={buildWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 14px",
              borderRadius: 999,
              textDecoration: "none",
              color: "rgba(255,255,255,0.95)",
              background: "rgba(212,175,55,0.12)",
              boxShadow: `inset 0 0 0 1px ${accent.c}`,
            }}
          >
            WhatsApp →
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
    color: "rgba(255,255,255,0.95)",
    background: "rgba(255,255,255,0.06)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
  }}
>
  Contact →
</a>


          <a
            href={buildGmailComposeUrl(emailSubject, emailBody)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 14px",
              borderRadius: 999,
              textDecoration: "none",
              color: "rgba(255,255,255,0.95)",
              background: "rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)",
            }}
          >
            Email →
          </a>
        </div>
      </section>

      {/* 3D highlights grid */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
        {config.sections.map((s) => (
          <TiltCard key={s.title} title={s.title} text={s.text} points={s.points} accentKey={config.key + s.title} />
        ))}
      </section>

      {/* Final CTA */}
      <section
        style={{
          marginTop: 34,
          borderRadius: 26,
          padding: 24,
          background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          boxShadow: "0 35px 90px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "clamp(22px, 2.8vw, 34px)" }}>Want this direction — built for your business?</h2>
            <p style={{ marginTop: 10, opacity: 0.82, maxWidth: "72ch" }}>
              Send budget + timeline and we’ll reply with the cleanest next steps. No fluff.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={buildWhatsAppUrl(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 14px",
                borderRadius: 999,
                textDecoration: "none",
                color: "rgba(255,255,255,0.95)",
                background: "rgba(212,175,55,0.12)",
                boxShadow: `inset 0 0 0 1px ${accent.c}`,
              }}
            >
              WhatsApp →
            </a>
            <a
              href={buildGmailComposeUrl(emailSubject, emailBody)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 14px",
                borderRadius: 999,
                textDecoration: "none",
                color: "rgba(255,255,255,0.95)",
                background: "rgba(255,255,255,0.06)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)",
              }}
            >
              Email →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

