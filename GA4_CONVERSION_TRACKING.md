# GA4 Conversion Tracking Implementation

## Overview
Implemented GA4 conversion tracking events across the Advance Fortify website while respecting cookie consent.

## Implementation Files

### 1. Analytics Helper Library
**File:** `lib/analytics.ts`

Reusable helper function that:
- Checks cookie consent before tracking
- Safely verifies gtag availability
- Logs events in development mode
- Exports `trackEvent(eventName, eventParams)` function

### 2. Events Implemented

#### A. contact_form_submit
**Event:** `gtag('event', 'contact_form_submit')`

**Locations:**
1. `components/CTAForm.tsx` (line 49)
   - Triggered on successful form submission to `/api/contact`
   - Fires after receiving 200 response from API

2. `app/(public)/contact/page.tsx` (line 33)
   - Triggered on contact form submission
   - Note: This form appears to be a demo/placeholder

#### B. request_quote
**Event:** `gtag('event', 'request_quote')`

**Locations:**
1. `components/Hero.tsx` (line 143)
   - "Request a Consultation" button (primary CTA)

2. `app/(public)/portfolio/demos/page.tsx` (line 135)
   - "Request a Quote" button

3. `app/(public)/portfolio/real/page.tsx` (line 89)
   - "Request Similar Project" button

4. `app/(public)/pricing/page.tsx` (line 204)
   - All pricing tier CTA buttons (via `renderPricingCard` function)
   - Triggers on any "Request Quote" / "Get Started" pricing buttons

5. `app/(public)/services/page.tsx` (line 177)
   - "Get Started Today" button

#### C. whatsapp_click
**Event:** `gtag('event', 'whatsapp_click', { method: 'whatsapp' })`

**Locations:**
1. `components/CTAForm.tsx` (line 302)
   - WhatsApp quick contact button below form

2. `app/(public)/contact/page.tsx` (line 102)
   - WhatsApp contact card (main contact methods)

#### D. email_click
**Event:** `gtag('event', 'email_click', { method: 'email' })`

**Locations:**
1. `components/CTAForm.tsx` (line 332)
   - Email quick contact button below form

2. `app/(public)/contact/page.tsx` (line 138)
   - Email contact card (main contact methods)

3. `components/SiteFooter.tsx` (line 158)
   - Footer email link (admin@advancefortify.com)

## Key Features

### Cookie Consent Respect
- All events check for analytics consent via `getCookieConsent()`
- Events are blocked if `consent.analytics === false`
- Events only fire when user has explicitly accepted analytics cookies

### Safe Implementation
- Checks for `window.gtag` availability before calling
- Gracefully handles cases where GA is not loaded
- No errors thrown if gtag is unavailable

### Development Debugging
- All events log to console in development mode
- Shows when events are tracked, blocked, or gtag is unavailable
- Format: `[GA4] Event tracked: event_name { params }`

### Production Ready
- No console logs in production
- Respects user privacy preferences
- Works with existing Google Consent Mode implementation

## Testing Instructions

### 1. Test Cookie Consent Flow
1. Clear browser storage
2. Visit website
3. Check console - should see: `[GA4] Event blocked (no consent)`
4. Accept cookies
5. Trigger events - should see: `[GA4] Event tracked: ...`

### 2. Test Individual Events

#### contact_form_submit
- Fill out and submit main contact form
- Or fill out CTA form on homepage
- Check console for: `[GA4] Event tracked: contact_form_submit`

#### request_quote
- Click "Request a Consultation" on homepage hero
- Click "Request a Quote" on pricing page
- Click "Request Similar Project" on real portfolio page
- Check console for: `[GA4] Event tracked: request_quote`

#### whatsapp_click
- Click any WhatsApp button/link
- Check console for: `[GA4] Event tracked: whatsapp_click { method: 'whatsapp' }`

#### email_click
- Click any mailto: link
- Check console for: `[GA4] Event tracked: email_click { method: 'email' }`

### 3. Verify in GA4
1. Go to GA4 Real-time reports
2. Trigger events on website
3. Check "Events" card in real-time view
4. Should see custom events appearing

## Notes

- All tracking respects existing GA Consent Mode implementation
- Events are only sent when `analytics_storage: 'granted'`
- No duplicate events - each action triggers exactly one event
- Clean, maintainable code with centralized helper function
