"use client";

import React, { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Card = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  kind: "real" | "demo";
};

const WHATSAPP_NUMBER = "40773336173"; // TODO: pune numarul tau in format international (ex: 4074xxxxxxx)
const EMAIL_TO = "admin@advancefortify.com";

const CARDS: Card[] = [
  {
    id: "lux-landing",
    slug: "luxury-landing",
    title: "Luxury Landing Page",
    subtitle: "High-end conversion focused design",
    tag: "Landing",
    kind: "demo",
  },
  {
    id: "biz-site",
    slug: "business-website",
    title: "Business Website",
    subtitle: "Clean structure for trust & growth",
    tag: "Website",
    kind: "demo",
  },
  {
    id: "ecom-concept",
    slug: "ecommerce",
    title: "E-commerce Concept",
    subtitle: "Modern UX with product focus",
    tag: "E-commerce",
    kind: "demo",
  },
  {
    id: "local-service",
    slug: "local-service",
    title: "Local Service Demo",
    subtitle: "Built for local SEO & leads",
    tag: "Local",
    kind: "demo",
  },
];

type Glow = { x: number; y: number; on: boolean };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useStablePalette(id: string) {
  const palette = useMemo(() => {
    const options = [
      { a: "rgba(212, 175, 55, 0.55)", b: "rgba(212, 175, 55, 0.08)" }, // gold
      { a: "rgba(255, 171, 64, 0.50)", b: "rgba(255, 171, 64, 0.08)" }, // amber
      { a: "rgba(0, 229, 255, 0.40)", b: "rgba(0, 229, 255, 0.08)" }, // cyan
      { a: "rgba(176, 120, 255, 0.45)", b: "rgba(176, 120, 255, 0.08)" }, // violet
    ];
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    return options[hash % options.length];
  }, [id]);

  return palette;
}

function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function buildMailtoUrl(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TO}&su=${s}&body=${b}`;
}


function Card3D({ card }: { card: Card }) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState<Glow>({ x: 50, y: 40, on: false });
  const accent = useStablePalette(card.id);

  const demoHref = `/demo/${card.slug}`;

  const waMsg =
    `Hi! I want the "${card.title}" style.\n` +
    `Budget: (write)\nTimeline: (write)\nBusiness: (write)\n` +
    `Demo: ${demoHref}`;

  const emailSubject = `Advance Fortify — I want the "${card.title}" style`;
  const emailBody =
    `Hi Advance Fortify,\n\n` +
    `I want the "${card.title}" style.\n\n` +
    `Budget: \nTimeline: \nBusiness: \n\n` +
    `Demo link: ${demoHref}\n\n` +
    `Thanks!`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();

    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const px = clamp((x / r.width) * 100, 0, 100);
    const py = clamp((y / r.height) * 100, 0, 100);

    const rotateY = ((x / r.width) - 0.5) * 18;
    const rotateX = ((y / r.height) - 0.5) * -16;

    el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    setGlow({ x: px, y: py, on: true });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0)";
    setGlow((g) => ({ ...g, on: false }));
  };

  const onEnter = () => setGlow((g) => ({ ...g, on: true }));

  const openDemo = () => router.push(demoHref);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      onClick={openDemo}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openDemo();
      }}
      style={{
        position: "relative",
        borderRadius: 22,
        padding: 28,
        minHeight: 270,
        cursor: "pointer",
        userSelect: "none",
        transformStyle: "preserve-3d",
        transition: "transform 180ms ease",
        background: "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
        boxShadow: "0 35px 90px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
      aria-label={`${card.title} card`}
    >
      {/* Dynamic glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -2,
          opacity: glow.on ? 1 : 0,
          transition: "opacity 220ms ease",
          background: `radial-gradient(320px 220px at ${glow.x}% ${glow.y}%, ${accent.a}, transparent 60%)`,
          filter: "blur(8px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(800px 420px at 30% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(700px 420px at 80% 110%, rgba(0,0,0,0.65), transparent 55%)",
          opacity: 0.75,
          zIndex: 0,
        }}
      />

      {/* Border accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 22,
          pointerEvents: "none",
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.07), inset 0 0 0 2px ${accent.b}`,
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", transform: "translateZ(26px)", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "rgba(212, 175, 55, 0.9)",
              boxShadow: "0 0 18px rgba(212,175,55,0.35)",
              flex: "0 0 auto",
            }}
          />
          <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.62 }}>
            {card.tag}
          </span>

          <span
            style={{
              marginLeft: "auto",
              fontSize: 11,
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
              opacity: 0.85,
            }}
          >
            {card.kind === "real" ? "Real project" : "Demo direction"}
          </span>
        </div>

        <h3 style={{ fontSize: 22, margin: 0, lineHeight: 1.15 }}>{card.title}</h3>

        <p style={{ marginTop: 10, marginBottom: 0, opacity: 0.78, maxWidth: "40ch" }}>
          {card.subtitle}
        </p>

        <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 12, opacity: 0.92 }}>
          <span style={{ fontSize: 14 }}>→</span>
          <span style={{ fontSize: 14, letterSpacing: "0.01em" }}>Open demo</span>
          <span style={{ marginLeft: "auto", fontSize: 13, opacity: 0.7 }}>Hover = 3D</span>
        </div>

        {/* CTAs */}
        <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={buildWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              zIndex: 5,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 12px",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 13,
              color: "rgba(255,255,255,0.92)",
              background: "rgba(212,175,55,0.10)",
              boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            WhatsApp →
          </a>

          <a
            href={buildMailtoUrl(emailSubject, emailBody)}
            style={{
              position: "relative",
              zIndex: 5,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 12px",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 13,
              color: "rgba(255,255,255,0.92)",
              background: "rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            Email →
          </a>
        </div>
      </div>

      {/* Bottom shimmer line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 16,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
          opacity: glow.on ? 1 : 0.35,
          transition: "opacity 200ms ease",
          filter: "blur(0.2px)",
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default function Portfolio3DShowcase() {
  return (
    <section style={{ padding: "84px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", margin: 0 }}>
          Portfolio & Demo Directions
        </h2>
        <p style={{ maxWidth: "62ch", opacity: 0.8, marginTop: 14 }}>
          Real projects and abstract demo concepts — choose a direction fast, then build the real thing with confidence.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
        {CARDS.map((c) => (
          <Card3D key={c.id} card={c} />
        ))}
      </div>
    </section>
  );
}
