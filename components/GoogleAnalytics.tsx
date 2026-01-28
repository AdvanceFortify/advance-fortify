'use client';

import { useEffect, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_ID = 'G-M0EC6RRK1B';

function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.gtag) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      window.gtag('event', 'page_view', {
        page_path: url,
      });
      if (process.env.NODE_ENV === 'development') {
        console.log('[GA4] page_view sent:', url);
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Listen for consent updates
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent;
      const preferences = customEvent.detail;
      
      if (window.gtag) {
        if (preferences.analytics) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
          });
          if (process.env.NODE_ENV === 'development') {
            console.log('[GA4] Consent updated: granted');
          }
        } else {
          window.gtag('consent', 'update', {
            analytics_storage: 'denied',
          });
          if (process.env.NODE_ENV === 'development') {
            console.log('[GA4] Consent updated: denied');
          }
        }
      }
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);

    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname
            });
            
            ${process.env.NODE_ENV === 'development' ? `console.log('[GA4] Initialized with consent: denied');` : ''}
          `,
        }}
      />
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
