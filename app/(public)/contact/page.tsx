export const metadata = {
  title: "Advance Fortify | Contact",
  description:
    "Tell us what you need and we’ll reply with a clear plan and quote. No fluff.",
};

export default function ContactPage() {
  return (
    <main style={{ padding: "84px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: "clamp(34px, 4.5vw, 60px)", margin: 0 }}>
        Contact
      </h1>
      <p style={{ marginTop: 14, opacity: 0.82, maxWidth: "70ch" }}>
        Tell us what you need (business type, budget, timeline). We’ll reply with
        a clear plan and quote.
      </p>

      <div
        style={{
          marginTop: 26,
          borderRadius: 22,
          padding: 22,
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          boxShadow:
            "0 35px 90px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <p style={{ margin: 0, opacity: 0.85 }}>
          Email: <strong>admin@advancefortify.com</strong>
        </p>
        <p style={{ marginTop: 10, opacity: 0.85 }}>
          WhatsApp: <strong>+40 773 336 173</strong>
        </p>

        <p style={{ marginTop: 16, opacity: 0.75 }}>
          (Next step: we’ll add a clean contact form + tracking.)
        </p>
      </div>
    </main>
  );
}
