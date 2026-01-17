import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Advance Fortify',
  description: 'Get in touch with Advance Fortify via WhatsApp, email, or contact form.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
