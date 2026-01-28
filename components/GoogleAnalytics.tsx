'use client';

import { useEffect } from 'react';
import { getCookieConsent } from './CookieConsent';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    // If no GA ID is set, don't load anything
    if (!gaId) {
      console.log('[GA4] No NEXT_PUBLIC_GA_ID found. Analytics disabled.');
      return;
    }

    // Check initial consent
    const checkAndLoadGA = () => {
      const consent = getCookieConsent();
      
      if (!consent || !consent.analytics) {
        // Analytics not consented - don't load GA4
        return;
      }

      // Load GA4 script
      if (document.querySelector(`script[src*="gtag"]`)) {
        // Already loaded
        return;
      }

      // Create script tags for GA4
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      // Initialize gtag
      if (!window.dataLayer) {
        window.dataLayer = [];
      }
      function gtag(...args: any[]) {
        window.dataLayer!.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', gaId, {
        page_path: window.location.pathname,
      });

      console.log('[GA4] Loaded with consent');
    };  

    // Check on mount
    checkAndLoadGA();

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      const preferences = event.detail;
      if (preferences.analytics) {
        checkAndLoadGA();
      } else {
        // User revoked consent - disable tracking
        // Note: We can't fully remove GA4 once loaded, but we can stop sending events
        console.log('[GA4] Analytics consent revoked');
        if (window.gtag) {
          // Disable GA4 by setting consent mode
          window.gtag('consent', 'update', {
            analytics_storage: 'denied',
          });
        }
      }
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate as EventListener);

    // Track page views on route changes (Next.js App Router)
    const handleRouteChange = () => {
      const consent = getCookieConsent();
      if (consent?.analytics && window.gtag) {
        window.gtag('config', gaId, {
          page_path: window.location.pathname,
        });
      }
    };

    // Listen for Next.js route changes
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(history, args);
      setTimeout(handleRouteChange, 0);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate as EventListener);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
}
