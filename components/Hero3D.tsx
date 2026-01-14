"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Card = {
  pill: string;
  title: string;
  desc: string;
  tone?: "gold" | "steel";
};

export default function Hero3D() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const cards: Card[] = useMemo(
    () => [
      {
        pill: "ADVANCE FORTIFY",
        title: "Landing Pages",
        desc: "Conversion-first structure • fast delivery",
        tone: "gold",
      },
      {
        pill: "ADVANCE FORTIFY",
        title: "Business Websites",
        desc: "Trust signals • clear offers • SEO-ready",
        tone: "steel",
      },
      {
        pill: "ADVANCE FORTIFY",
        title: "Local SEO Websites",
        desc: "Maps intent • service pages • location schema",
        tone: "steel",
      },
    ],
    []
  );

  function setSceneVars(rx: number, ry: number, tz: number) {
    if (!sceneRef.current) return;
    sceneRef.current.style.setProperty("--rx", `${rx.toFixed(3)}deg`);
    sceneRef.current.style.setProperty("--ry", `${ry.toFixed(3)}deg`);
    sceneRef.current.style.setProperty("--tz", `${tz.toFixed(3)}px`);
  }

  useEffect(() => {
    if (reduced) {
      setSceneVars(0, 0, 0);
      return;
    }

    const el = wrapRef.current;
    if (!el) return;

    let targetRx = 0;
    let targetRy = 0;
    let targetTz = 0;
    let curRx = 0;
    let curRy = 0;
    let curTz = 0;

    const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);

      // Real 3D: rotateX/rotateY + subtle push forward
      targetRy = clamp(dx * 10, -10, 10);
      targetRx = clamp(-dy * 8, -8, 8);
      targetTz = clamp(Math.hypot(dx, dy) * 6, 0, 10);
    };

    const onLeave = () => {
      targetRx = 0;
      targetRy = 0;
      targetTz = 0;
    };

    const tick = () => {
      // Smooth follow
      curRx += (targetRx - curRx) * 0.08;
      curRy += (targetRy - curRy) * 0.08;
      curTz += (targetTz - curTz) * 0.08;

      setSceneVars(curRx, curRy, curTz);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  return (
    <div className="af3d-wrap" ref={wrapRef} aria-hidden="true">
      <div className="af3d-scene" ref={sceneRef}>
        <div className="af3d-stage">
          {/* glow layers */}
          <div className="af3d-glow af3d-glow--gold" />
          <div className="af3d-glow af3d-glow--blue" />

          {/* “glass device” */}
          <div className="af3d-device">
            <div className="af3d-deviceInner">
              <div className="af3d-orb" />
              <div className="af3d-grid" />
              <div className="af3d-noise" />
            </div>
          </div>

          {/* floating cards with depth */}
          <div className="af3d-cards">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className={`af3d-card ${c.tone === "gold" ? "af3d-card--gold" : ""}`}
                style={{
                  // Each card is placed in 3D space
                  transform: `translate3d(${idx === 0 ? -40 : idx === 1 ? 90 : 10}px, ${
                    idx === 0 ? 40 : idx === 1 ? -10 : 120
                  }px, ${idx === 0 ? 70 : idx === 1 ? 110 : 40}px)`,
                }}
              >
                <div className="af3d-pill">{c.pill}</div>
                <div className="af3d-title">{c.title}</div>
                <div className="af3d-desc">{c.desc}</div>
              </div>
            ))}
          </div>

          {/* top edge shine */}
          <div className="af3d-shine" />
        </div>
      </div>

      <style>{css}</style>
    </div>
  );
}

const css = `
.af3d-wrap{
  width: min(520px, 92vw);
  aspect-ratio: 1.25 / 1;
  position: relative;
  border-radius: 28px;
}

.af3d-scene{
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 28px;
  perspective: 1100px;
  --rx: 0deg;
  --ry: 0deg;
  --tz: 0px;
}

.af3d-stage{
  width: 100%;
  height: 100%;
  border-radius: 28px;
  position: relative;
  transform-style: preserve-3d;
  transform:
    rotateX(var(--rx))
    rotateY(var(--ry))
    translateZ(var(--tz));
  transition: filter .2s ease;
  will-change: transform;
  overflow: hidden;
  background:
    radial-gradient(1200px 600px at 20% 10%, rgba(203,165,83,.16), transparent 60%),
    radial-gradient(1000px 700px at 85% 35%, rgba(63,120,255,.10), transparent 60%),
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
  border: 1px solid rgba(255,255,255,.10);
  box-shadow:
    0 40px 120px rgba(0,0,0,.70),
    0 0 0 1px rgba(0,0,0,.25) inset;
}

.af3d-glow{
  position:absolute; inset:-40%;
  filter: blur(40px);
  transform: translateZ(-120px);
  opacity: .9;
}
.af3d-glow--gold{
  background: radial-gradient(circle at 30% 30%, rgba(203,165,83,.55), transparent 60%);
}
.af3d-glow--blue{
  background: radial-gradient(circle at 80% 40%, rgba(80,140,255,.30), transparent 60%);
}

.af3d-device{
  position:absolute;
  inset: 56px 52px 56px 52px;
  border-radius: 26px;
  transform: translateZ(35px);
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
  border: 1px solid rgba(255,255,255,.12);
  box-shadow:
    0 30px 80px rgba(0,0,0,.55),
    0 0 0 1px rgba(0,0,0,.25) inset;
  overflow:hidden;
}

.af3d-deviceInner{
  position:absolute; inset:0;
  transform-style: preserve-3d;
  background:
    radial-gradient(700px 400px at 20% 15%, rgba(203,165,83,.20), transparent 62%),
    radial-gradient(600px 420px at 80% 35%, rgba(90,140,255,.14), transparent 60%),
    linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.35));
}

.af3d-orb{
  position:absolute;
  width: 190px; height: 190px;
  left: 52%; top: 26%;
  transform: translate(-50%,-50%) translateZ(60px);
  border-radius: 999px;
  background:
    radial-gradient(circle at 30% 30%, rgba(255,255,255,.22), rgba(255,255,255,.04) 45%, rgba(0,0,0,.22) 75%),
    radial-gradient(circle at 50% 70%, rgba(203,165,83,.24), transparent 60%);
  box-shadow:
    0 40px 90px rgba(0,0,0,.55),
    0 0 0 1px rgba(255,255,255,.08) inset;
}

.af3d-grid{
  position:absolute; inset:-2px;
  transform: translateZ(10px);
  opacity:.55;
  background:
    linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px) 0 0/28px 28px,
    linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px) 0 0/28px 28px;
  mask-image: radial-gradient(circle at 50% 35%, black 40%, transparent 72%);
}

.af3d-noise{
  position:absolute; inset:0;
  opacity:.08;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
  background-size: 220px 220px;
  transform: translateZ(2px);
}

.af3d-cards{
  position:absolute; inset:0;
  transform-style: preserve-3d;
  pointer-events:none;
}

.af3d-card{
  position:absolute;
  left: 20%;
  top: 45%;
  width: 220px;
  padding: 14px 14px 12px;
  border-radius: 18px;
  transform-style: preserve-3d;
  background: rgba(10,10,12,.62);
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 22px 55px rgba(0,0,0,.55);
  backdrop-filter: blur(10px);
}
.af3d-card--gold{
  border-color: rgba(203,165,83,.28);
  box-shadow: 0 28px 70px rgba(0,0,0,.6), 0 0 0 1px rgba(203,165,83,.10) inset;
}
.af3d-pill{
  display:inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.75);
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.05);
}
.af3d-title{
  margin-top: 10px;
  font-size: 18px;
  font-weight: 800;
  color: rgba(255,255,255,.92);
}
.af3d-desc{
  margin-top: 6px;
  font-size: 13px;
  color: rgba(255,255,255,.68);
  line-height: 1.45;
}

.af3d-shine{
  position:absolute; inset:-10px -10px auto -10px;
  height: 120px;
  transform: translateZ(90px);
  background: radial-gradient(800px 140px at 50% 0%, rgba(255,255,255,.10), transparent 65%);
  pointer-events:none;
}

@media (max-width: 900px){
  .af3d-wrap{ width:min(560px, 94vw); }
  .af3d-device{ inset: 50px 38px 50px 38px; }
}
`;
