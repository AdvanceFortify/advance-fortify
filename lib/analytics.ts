/**
 * GA4 Event Tracking Helper
 * Respects cookie consent and safely checks for gtag availability
 */

import { getCookieConsent } from '@/components/CookieConsent';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track a GA4 event
 * @param eventName - The name of the event to track
 * @param eventParams - Optional parameters for the event
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  // Check if user has consented to analytics
  const consent = getCookieConsent();
  if (!consent || !consent.analytics) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4] Event blocked (no consent):', eventName, eventParams);
    }
    return;
  }

  // Check if gtag is available
  if (typeof window === 'undefined' || !window.gtag) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4] Event blocked (gtag not available):', eventName, eventParams);
    }
    return;
  }

  // Track the event
  window.gtag('event', eventName, eventParams);

  if (process.env.NODE_ENV === 'development') {
    console.log('[GA4] Event tracked:', eventName, eventParams);
  }
}
