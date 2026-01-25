# Advance Fortify

Premium Next.js website for Advance Fortify - web design, SEO, and marketing services.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Environment Setup

1. **Copy the environment template:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Configure Resend for email notifications:**
   
   The contact form uses [Resend](https://resend.com) to send email notifications. Follow these steps:

   **a) Create a Resend account:**
   - Sign up at [resend.com](https://resend.com)
   - Free tier includes 100 emails/day, 3,000 emails/month

   **b) Get your API key:**
   - Go to [API Keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Give it a name (e.g., "Advance Fortify Production")
   - Select "Sending access" permission
   - Copy the API key (starts with `re_`)

   **c) Add to `.env.local`:**
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

   **d) Verify your domain (optional but recommended):**
   
   By default, Resend allows sending from `onboarding@resend.dev` for testing. For production:
   
   - Go to [Domains](https://resend.com/domains) in Resend dashboard
   - Click "Add Domain"
   - Enter your domain (e.g., `advancefortify.com`)
   - Add the DNS records provided by Resend to your domain's DNS settings:
     - **TXT record** for SPF
     - **CNAME records** for DKIM
     - **MX record** (optional)
   - Wait for verification (usually takes 15-60 minutes)
   - Once verified, update the "from" email in `/app/api/contact/route.ts` if needed

   **e) Test the setup:**
   ```bash
   npm run dev
   ```
   - Navigate to `http://localhost:3000`
   - Fill out and submit the contact form
   - Check your email at `admin@advancefortify.com`
   - Check server console for submission logs

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Setting environment variables in Vercel:**

1. Go to your project on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (starts with `re_`)
   - **Environments:** Select Production, Preview, and Development
4. Click "Save"
5. Redeploy your application for the changes to take effect

### Deploy on Other Platforms

If deploying to other platforms (Netlify, Railway, etc.), ensure you:
- Set the `RESEND_API_KEY` environment variable in your platform's settings
- Build command: `npm run build`
- Start command: `npm run start`

## Features

### Contact Form

- **Email Notifications:** Powered by Resend
- **Spam Protection:**
  - Honeypot field to catch bots
  - Rate limiting (3 requests per minute per IP)
- **Graceful Fallback:** If email fails, submission is still logged (no leads lost)
- **Responsive Design:** Works on all devices

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with custom properties
- **Email:** Resend
- **Deployment:** Vercel (recommended)

## Project Structure

```
advance-fortify/
├── app/
│   ├── api/contact/          # Contact form API route
│   ├── (public)/             # Public pages
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── CTAForm.tsx          # Contact form with honeypot
│   ├── Hero.tsx             # Hero section with animated counter
│   └── ServiceCards.tsx     # Service cards display
├── lib/                     # Utilities and translations
└── public/                  # Static assets
```

## Contact Form API

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "serviceInterest": "Landing Page",
  "message": "I need help with...",
  "companyWebsite": ""  // Honeypot - should be empty
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Your request has been received. We'll contact you within 24 hours."
}
```

**Features:**
- Email validation
- Required field validation
- Honeypot spam protection
- Rate limiting (3 req/min per IP)
- Email notification via Resend
- Graceful error handling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Resend Documentation](https://resend.com/docs) - email API documentation.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

