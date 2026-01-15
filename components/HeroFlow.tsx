"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const WHATSAPP_NUMBER = "40773336173";
const EMAIL_TO = "admin@advancefortify.com";

function waUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function gmailUrl(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TO}&su=${s}&body=${b}`;
}
function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

export default function HeroFlow() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const smooth = useRef({ x: 0.5, y: 0.5, p: 0 });

  const waMessage = useMemo(
    () =>
      "Hi! I want a premium homepage like Apple/Lusion. Business: _____. Goal: _____. Budget: _____. Timeline: _____.",
    []
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer.current.x = clamp((e.clientX - r.left) / r.width, 0, 1);
      pointer.current.y = clamp((e.clientY - r.top) / r.height, 0, 1);
    };

    const onLeave = () => {
      pointer.current.x = 0.5;
      pointer.current.y = 0.5;
    };

    const progress = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const total = r.height - vh;
      const scrolled = clamp(-r.top, 0, Math.max(1, total));
      return clamp(scrolled / Math.max(1, total), 0, 1);
    };

    const tick = () => {
      const p = progress();
      const ease = 0.08;

      smooth.current.x += (pointer.current.x - smooth.current.x) * ease;
      smooth.current.y += (pointer.current.y - smooth.current.y) * ease;
      smooth.current.p += (p - smooth.current.p) * 0.09;

      el.style.setProperty("--mx", smooth.current.x.toFixed(4));
      el.style.setProperty("--my", smooth.current.y.toFixed(4));
      el.style.setProperty("--p", smooth.current.p.toFixed(4));

      rafRef.current = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("pointermove", onMove as any);
      el.removeEventListener("pointerleave", onLeave as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={wrapRef} className="af-flow" data-menu={menuOpen ? "open" : "closed"}>
      {/* top controls */}
      <header className="af-topbar">
        <div className="af-logo">
          <span className="af-logo__mark" aria-hidden="true" />
          <span className="af-logo__txt">ADVANCE FORTIFY</span>
        </div>

        <div className="af-topbar__right">
          <a className="af-pill af-pill--primary" href={waUrl(waMessage)} target="_blank" rel="noreferrer">
            LET&apos;S TALK
          </a>
          <button className="af-pill" type="button" onClick={() => setMenuOpen((v) => !v)}>
            MENU <span className="af-dots" aria-hidden="true">••</span>
          </button>
        </div>
      </header>

      {/* HERO wrapper */}
      <section className="af-heroWrap" aria-label="Hero">
        <div className="af-frame">
          {/* bg */}
          <div className="af-bg" aria-hidden="true">
            <div className="af-bg__wash" />
            <div className="af-bg__grain" />
            <div className="af-vignette" />
          </div>

          {/* arc */}
          <svg className="af-arc" viewBox="0 0 1200 600" aria-hidden="true">
            <defs>
              <linearGradient id="afG" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="rgba(40,210,255,.95)" />
                <stop offset="0.55" stopColor="rgba(110,240,255,.95)" />
                <stop offset="1" stopColor="rgba(60,180,255,.85)" />
              </linearGradient>
              <filter id="afGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              className="af-arc__base"
              d="M 80 520 C 220 120, 520 90, 720 210 C 910 325, 1040 270, 1120 140"
            />
            <path
              className="af-arc__draw"
              d="M 80 520 C 220 120, 520 90, 720 210 C 910 325, 1040 270, 1120 140"
            />
          </svg>

          {/* content */}
          <div className="af-copy">
            <div className="af-kicker">Design • Build • Ship</div>

            <h1 className="af-h1">
              Connecting ideas to
              <br />
              uniquely crafted
              <br />
              experiences
            </h1>

            <p className="af-sub">
              Premium Next.js websites with cinematic motion, clean typography, and conversion-first structure.
            </p>

            <div className="af-actions">
              <a className="af-btn af-btn--dark" href={waUrl(waMessage)} target="_blank" rel="noreferrer">
                WhatsApp — Request a Quote <span aria-hidden="true">→</span>
              </a>

              <a
                className="af-btn af-btn--light"
                href={gmailUrl(
                  "Advance Fortify — Project inquiry",
                  "Hi! I want a premium website.\nBusiness: ____\nGoal: ____\nTimeline: ____\nBudget: ____"
                )}
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </div>

            <div className="af-mini">
              <div className="af-mini__item">
                <span className="af-mini__cap">Speed</span>
                <span className="af-mini__val">Lighthouse mindset</span>
              </div>
              <div className="af-mini__item">
                <span className="af-mini__cap">SEO</span>
                <span className="af-mini__val">Metadata + indexing</span>
              </div>
              <div className="af-mini__item">
                <span className="af-mini__cap">Premium</span>
                <span className="af-mini__val">Motion + editorial</span>
              </div>
            </div>
          </div>

          {/* menu */}
          <aside className="af-menu" aria-hidden={!menuOpen}>
            <div className="af-menu__title">Menu</div>
            <a className="af-menu__link" href="#work">Featured Work</a>
            <a className="af-menu__link" href="#services">Services</a>
            <a className="af-menu__link" href="#process">Process</a>
            <a className="af-menu__link" href="#contact">Contact</a>
          </aside>
        </div>
      </section>

      {/* after */}
      <section className="af-after" id="work">
        <div className="af-after__inner">
          <h2 className="af-after__h2">Featured Work</h2>
          <p className="af-after__p">
            Next: facem grid-ul Lusion (carduri mari 2 coloane, hover premium, tags mici + titlu mare + săgeată).
          </p>
        </div>
      </section>

      <style jsx>{`
        .af-flow { --mx: .5; --my: .5; --p: 0; background: #f4f5f7; color: #0b0c10; }

        .af-topbar{
          position: fixed; top: 18px; left: 18px; right: 18px; z-index: 50;
          display:flex; align-items:center; justify-content:space-between;
          pointer-events:none;
        }
        .af-topbar__right, .af-logo{ pointer-events:auto; }

        .af-logo{
          display:inline-flex; align-items:center; gap:10px;
          font-weight:800; letter-spacing:.14em; font-size:12px;
          text-transform:uppercase; opacity:.95;
        }
        .af-logo__mark{
          width:10px; height:10px; border-radius:999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.95), rgba(0,0,0,.15));
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        .af-topbar__right{ display:inline-flex; gap:10px; align-items:center; }

        .af-pill{
          border:0; cursor:pointer; padding:10px 14px; border-radius:999px;
          background: rgba(20,22,28,.08); backdrop-filter: blur(10px);
          box-shadow: 0 14px 40px rgba(0,0,0,.12);
          font-weight:700; letter-spacing:.06em; font-size:12px; text-transform:uppercase;
          transition: transform 160ms ease, background 160ms ease;
        }
        .af-pill:hover{ transform: translateY(-1px); background: rgba(20,22,28,.11); }
        .af-pill--primary{ background: rgba(10,12,16,.86); color:#fff; }
        .af-pill--primary:hover{ background: rgba(10,12,16,.92); }
        .af-dots{ margin-left: 6px; opacity: .7; }

        .af-heroWrap{ height: 220vh; padding: 0 18px; }
        .af-frame{
          position: sticky; top: 0; height: 100vh;
          max-width: 1400px; margin: 12px auto;
          border-radius: 28px; overflow: hidden;
          box-shadow: 0 60px 140px rgba(0,0,0,.14);
          background: #eef0f4;
          isolation: isolate;
        }

        .af-bg, .af-arc, .af-copy{ position:absolute; inset:0; }
        .af-bg{ z-index:0; }
        .af-arc{ z-index:1; pointer-events:none; }
        .af-copy{ z-index:2; display:grid; align-content:center; padding: clamp(22px, 4vw, 64px); }

        .af-bg__wash{
          position:absolute; inset:-40%;
          background:
            radial-gradient(900px 520px at 20% 30%, rgba(0,160,255,.18), transparent 60%),
            radial-gradient(820px 520px at 65% 25%, rgba(50,220,255,.20), transparent 60%),
            radial-gradient(980px 680px at 60% 70%, rgba(0,0,0,.10), transparent 65%),
            linear-gradient(180deg, rgba(255,255,255,.92), rgba(240,242,246,1));
          transform: translate3d(calc((var(--mx) - .5) * -22px), calc((var(--my) - .5) * -18px), 0) scale(1.05);
        }
        .af-bg__grain{
          position:absolute; inset:0; opacity:.17; mix-blend-mode:multiply; pointer-events:none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
          background-size: 260px 260px;
        }
        .af-vignette{
          position:absolute; inset:0;
          background: radial-gradient(1200px 700px at 50% 60%, transparent 40%, rgba(0,0,0,.08) 75%, rgba(0,0,0,.14));
          pointer-events:none;
        }

        .af-arc__base{ fill:none; stroke: rgba(0,0,0,.10); stroke-width: 24; stroke-linecap: round; opacity: .55; }
        .af-arc__draw{
          fill:none; stroke: url(#afG); stroke-width: 24; stroke-linecap: round;
          filter: url(#afGlow);
          stroke-dasharray: 2000;
          stroke-dashoffset: calc(2000 - (var(--p) * 2000));
          opacity: .95;
        }

        .af-kicker{
          width: fit-content; padding: 8px 12px; border-radius: 999px;
          background: rgba(255,255,255,.75); box-shadow: 0 18px 50px rgba(0,0,0,.12);
          font-weight:700; letter-spacing:.08em; text-transform:uppercase; font-size:12px;
        }

        .af-h1{
          margin: 14px 0 10px;
          font-size: clamp(46px, 6.2vw, 92px);
          line-height: .96; letter-spacing: -0.03em; font-weight: 700;
          transform: translate3d(calc((var(--mx) - .5) * -6px), calc((var(--my) - .5) * -4px), 0);
        }
        .af-sub{
          margin:0; max-width: 62ch;
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.6; color: rgba(10,12,16,.72);
        }

        .af-actions{ margin-top: 18px; display:flex; gap: 12px; flex-wrap: wrap; }
        .af-btn{
          text-decoration:none; border-radius: 999px; padding: 12px 16px;
          font-weight: 800; display:inline-flex; gap: 10px; align-items:center;
          transition: transform 160ms ease; box-shadow: 0 18px 60px rgba(0,0,0,.12);
        }
        .af-btn:hover{ transform: translateY(-1px); }
        .af-btn--dark{ background: rgba(10,12,16,.90); color:#fff; }
        .af-btn--light{ background: rgba(255,255,255,.78); color: rgba(10,12,16,.90); }

        .af-mini{
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          max-width: 860px;
        }
        .af-mini__item{
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.68);
          box-shadow: 0 22px 70px rgba(0,0,0,.10);
          backdrop-filter: blur(10px);
        }
        .af-mini__cap{
          display:block; font-size: 12px; font-weight: 800; letter-spacing: .08em;
          text-transform: uppercase; color: rgba(10,12,16,.55); margin-bottom: 4px;
        }
        .af-mini__val{ display:block; font-size: 13px; color: rgba(10,12,16,.78); font-weight: 650; }

        .af-menu{
          position: absolute; top: 62px; right: 18px;
          width: 260px; padding: 14px; border-radius: 20px;
          background: rgba(255,255,255,.86); backdrop-filter: blur(12px);
          box-shadow: 0 30px 90px rgba(0,0,0,.16);
          border: 1px solid rgba(0,0,0,.06);
          transform: translateY(-8px); opacity: 0; pointer-events:none;
          transition: opacity 160ms ease, transform 160ms ease;
          z-index: 3;
        }
        .af-flow[data-menu="open"] .af-menu{ opacity: 1; transform: translateY(0); pointer-events:auto; }
        .af-menu__title{
          font-weight: 900; letter-spacing:.12em; text-transform:uppercase; font-size:12px;
          color: rgba(10,12,16,.55); margin-bottom: 10px;
        }
        .af-menu__link{
          display:block; padding: 10px 10px; border-radius: 14px; text-decoration:none;
          color: rgba(10,12,16,.86); font-weight: 800;
        }
        .af-menu__link:hover{ background: rgba(10,12,16,.06); }

        .af-after{ padding: 90px 18px 120px; background: #0b0c10; color: rgba(245,242,234,.92); }
        .af-after__inner{ max-width: 1200px; margin: 0 auto; }
        .af-after__h2{ margin: 0 0 8px; font-size: clamp(36px, 4vw, 60px); letter-spacing: -0.02em; }
        .af-after__p{ margin: 0; max-width: 70ch; color: rgba(245,242,234,.75); line-height: 1.6; }

        @media (max-width: 980px){
          .af-heroWrap{ height: 175vh; padding: 0 12px; }
          .af-h1{ font-size: clamp(38px, 10vw, 60px); }
          .af-mini{ grid-template-columns: 1fr; max-width: 520px; }
        }
      `}</style>
    </div>
  );
}
