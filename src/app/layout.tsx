import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Star Citizen Referral Code 2026 — Get 50,000 UEC Free',
    template: '%s | screferralreward.com'
  },
  description:
    'Use a Star Citizen referral code when you sign up to get 50,000 free UEC. Code: STAR-GCQJ-N6NC. Updated for 2026.',
  metadataBase: new URL('https://www.screferralreward.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'screferralreward.com',
    url: 'https://screferralreward.com',
    title: 'Star Citizen Referral Code 2026 — Get 50,000 UEC Free',
    description:
      'Use code STAR-GCQJ-N6NC to claim 50,000 UEC bonus on a new RSI account. Updated for 2026.',
    images: [
      {
        url: '/images/hero/hero-01.jpg',
        width: 1200,
        height: 675,
        alt: 'Star Citizen referral — claim 50,000 UEC with code STAR-GCQJ-N6NC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Citizen Referral Code 2026 — 50,000 UEC Free',
    description: 'Code STAR-GCQJ-N6NC. Apply at signup, claim 50,000 UEC.',
    images: ['/images/hero/hero-01.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-platinum font-sans min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
