'use client';

interface PortfolioImageProps {
  slug: string;
  title: string;
}

export default function PortfolioImage({ slug, title }: PortfolioImageProps) {
  // Generate different gradient patterns and accent colors for different portfolio items
  const getTheme = (slug: string) => {
    const themes: Record<string, { gradient: string; accent: string; glow: string }> = {
      saas: {
        gradient: 'linear-gradient(135deg, rgba(100, 150, 255, 0.25) 0%, rgba(150, 200, 255, 0.15) 50%, rgba(100, 150, 255, 0.1) 100%)',
        accent: 'rgba(100, 150, 255, 0.4)',
        glow: 'rgba(100, 150, 255, 0.2)',
      },
      'local-service': {
        gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(230, 200, 120, 0.15) 50%, rgba(212, 175, 55, 0.1) 100%)',
        accent: 'rgba(212, 175, 55, 0.4)',
        glow: 'rgba(212, 175, 55, 0.2)',
      },
      coach: {
        gradient: 'linear-gradient(135deg, rgba(150, 100, 255, 0.25) 0%, rgba(200, 150, 255, 0.15) 50%, rgba(150, 100, 255, 0.1) 100%)',
        accent: 'rgba(150, 100, 255, 0.4)',
        glow: 'rgba(150, 100, 255, 0.2)',
      },
      ecommerce: {
        gradient: 'linear-gradient(135deg, rgba(100, 255, 150, 0.25) 0%, rgba(150, 255, 200, 0.15) 50%, rgba(100, 255, 150, 0.1) 100%)',
        accent: 'rgba(100, 255, 150, 0.4)',
        glow: 'rgba(100, 255, 150, 0.2)',
      },
      luxury: {
        gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(180, 140, 40, 0.2) 50%, rgba(212, 175, 55, 0.15) 100%)',
        accent: 'rgba(212, 175, 55, 0.5)',
        glow: 'rgba(212, 175, 55, 0.25)',
      },
      minimal: {
        gradient: 'linear-gradient(135deg, rgba(200, 200, 200, 0.2) 0%, rgba(150, 150, 150, 0.15) 50%, rgba(200, 200, 200, 0.1) 100%)',
        accent: 'rgba(200, 200, 200, 0.3)',
        glow: 'rgba(200, 200, 200, 0.15)',
      },
    };
    return themes[slug] || themes.saas;
  };

  const theme = getTheme(slug);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.gradient,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0.5rem',
      }}
    >
      {/* Browser Frame */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(11, 11, 14, 0.6)',
          borderRadius: '12px',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 0 1px ${theme.glow}`,
          overflow: 'hidden',
        }}
      >
        {/* Browser Chrome */}
        <div
          style={{
            height: '32px',
            background: 'rgba(0, 0, 0, 0.4)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px 12px 0 0',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.75rem',
            gap: '0.5rem',
            position: 'relative',
          }}
        >
          {/* Traffic Lights */}
          <div style={{ display: 'flex', gap: '0.375rem' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'rgba(255, 100, 100, 0.7)',
                boxShadow: '0 0 4px rgba(255, 100, 100, 0.5)',
              }}
            />
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'rgba(255, 200, 100, 0.7)',
                boxShadow: '0 0 4px rgba(255, 200, 100, 0.5)',
              }}
            />
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'rgba(100, 255, 100, 0.7)',
                boxShadow: '0 0 4px rgba(100, 255, 100, 0.5)',
              }}
            />
          </div>
          {/* Address Bar */}
          <div
            style={{
              flex: 1,
              height: '18px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '4px',
              margin: '0 0.5rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 0.5rem',
              fontSize: '8px',
              color: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            {slug === 'saas' && 'app.example.com'}
            {slug === 'local-service' && 'service.example.com'}
            {slug === 'coach' && 'coach.example.com'}
            {slug === 'ecommerce' && 'shop.example.com'}
            {slug === 'luxury' && 'luxury.example.com'}
            {slug === 'minimal' && 'minimal.example.com'}
          </div>
        </div>

        {/* Page Content Preview */}
        <div
          style={{
            padding: '1rem',
            height: 'calc(100% - 32px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Hero Section Mock */}
          <div
            style={{
              width: '70%',
              height: '16px',
              background: `linear-gradient(90deg, ${theme.accent} 0%, transparent 100%)`,
              borderRadius: '4px',
              marginBottom: '0.5rem',
              boxShadow: `0 2px 8px ${theme.glow}`,
            }}
          />
          <div
            style={{
              width: '85%',
              height: '10px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              marginBottom: '0.25rem',
            }}
          />
          <div
            style={{
              width: '75%',
              height: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '3px',
              marginBottom: '1rem',
            }}
          />

          {/* CTA Button Mock */}
          <div
            style={{
              width: '35%',
              height: '24px',
              background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.glow} 100%)`,
              borderRadius: '6px',
              marginBottom: '1rem',
              boxShadow: `0 4px 12px ${theme.glow}`,
            }}
          />

          {/* Feature Cards Grid Mock */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.5rem',
              marginTop: 'auto',
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '0.25rem',
                    left: '0.25rem',
                    width: '12px',
                    height: '12px',
                    background: theme.accent,
                    borderRadius: '3px',
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.25rem',
                    left: '0.25rem',
                    right: '0.25rem',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '2px',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Subtle glow overlay */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
              opacity: 0.3,
              pointerEvents: 'none',
              filter: 'blur(20px)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
