export default function DemoTestPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 900,
          color: 'var(--text)',
          textAlign: 'center',
        }}
      >
        Demo route works ✓
      </h1>
      <p
        style={{
          fontSize: '1.25rem',
          color: 'var(--muted)',
          textAlign: 'center',
        }}
      >
        Portfolio routing is functioning correctly.
      </p>
      <a
        href="/portfolio"
        style={{
          padding: '1rem 2rem',
          background: 'rgba(212, 175, 55, 0.15)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '12px',
          color: 'var(--accent-1)',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        ← Back to Portfolio
      </a>
    </div>
  );
}
