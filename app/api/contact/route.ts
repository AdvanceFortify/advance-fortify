import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend lazily to avoid build-time errors
let resendInstance: Resend | null = null;
function getResend() {
  if (!resendInstance && process.env.RESEND_API_KEY) {
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}

// Simple in-memory rate limiter (per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // 3 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  record.count++;
  return true;
}

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 300000);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // HONEYPOT CHECK - if this field is filled, it's likely a bot
    if (body.companyWebsite) {
      // Silently return success but do nothing
      console.log('🍯 Honeypot triggered - likely spam submission');
      return NextResponse.json({
        success: true,
        message: 'Your request has been received. We\'ll contact you within 24 hours.',
      });
    }

    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
    
    if (!checkRateLimit(ip)) {
      console.warn(`⚠️ Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.', success: false },
        { status: 429 }
      );
    }

    // Validate required fields
    const { name, email, serviceInterest, message } = body;

    if (!name || !email || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format', success: false },
        { status: 400 }
      );
    }

    // Log the contact form submission to server logs
    const timestamp = new Date().toISOString();
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Timestamp:', timestamp);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', body.phone || 'Not provided');
    console.log('Service Interest:', serviceInterest);
    console.log('Message:', message);
    console.log('IP:', ip);
    console.log('===================================');

    // Get page URL from referer header
    const pageUrl = request.headers.get('referer') || 'Direct submission';

    // Send email via Resend
    let emailSent = false;
    let emailError = null;

    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY not configured');
      }

      const resend = getResend();
      if (!resend) {
        throw new Error('Failed to initialize Resend');
      }

      const { data, error } = await resend.emails.send({
        from: 'Advance Fortify <no-reply@advancefortify.com>',
        to: 'admin@advancefortify.com',
        subject: `New website inquiry — ${serviceInterest}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
              🔔 New Website Inquiry
            </h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold; width: 150px;">Name:</td>
                  <td style="padding: 8px 0; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px 0; color: #333;">${body.phone || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Service Interest:</td>
                  <td style="padding: 8px 0; color: #333;"><strong>${serviceInterest}</strong></td>
                </tr>
              </table>
            </div>

            <div style="background: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Message</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0; color: #666; font-size: 14px;">Submission Details</h4>
              <table style="width: 100%; font-size: 13px; color: #666;">
                <tr>
                  <td style="padding: 4px 0;"><strong>Timestamp:</strong></td>
                  <td style="padding: 4px 0;">${timestamp}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0;"><strong>Page URL:</strong></td>
                  <td style="padding: 4px 0;"><a href="${pageUrl}" style="color: #d4af37;">${pageUrl}</a></td>
                </tr>
                <tr>
                  <td style="padding: 4px 0;"><strong>IP Address:</strong></td>
                  <td style="padding: 4px 0;">${ip}</td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p>This is an automated notification from Advance Fortify contact form</p>
            </div>
          </div>
        `,
        text: `
NEW WEBSITE INQUIRY

Contact Details:
-----------------
Name: ${name}
Email: ${email}
Phone: ${body.phone || 'Not provided'}
Service Interest: ${serviceInterest}

Message:
--------
${message}

Submission Details:
-------------------
Timestamp: ${timestamp}
Page URL: ${pageUrl}
IP Address: ${ip}
        `,
      });

      if (error) {
        throw error;
      }

      emailSent = true;
      console.log('✅ Email sent successfully via Resend:', data?.id);
    } catch (error) {
      emailError = error;
      console.error('❌ Failed to send email via Resend:', error);
      // Continue to return success - we don't want to lose leads
    }

    // Return success response (even if email failed)
    const response: {
      success: boolean;
      message: string;
      warning?: string;
    } = {
      success: true,
      message: 'Your request has been received. We\'ll contact you within 24 hours.',
    };

    if (!emailSent) {
      response.warning = 'Submission recorded but email notification failed. Your message was logged.';
      console.warn('⚠️ Returning success despite email failure to not lose lead');
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
