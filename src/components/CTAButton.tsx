'use client';
import { useState, useEffect } from 'react';
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator';

type Props = {
  label?: string;
  size?: 'md' | 'lg';
  className?: string;
};

export default function CTAButton({
  label = 'Claim Your 50,000 UEC Now',
  size = 'lg',
  className = ''
}: Props) {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL);
  useEffect(() => { setHref(getRotatedReferralUrl()); }, []);

  const sizing =
    size === 'lg'
      ? 'px-8 py-4 text-lg'
      : 'px-5 py-2.5 text-sm';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-wide bg-gold text-charcoal hover:bg-goldDark transition-all hover:translate-y-[-1px] hover:shadow-gold ${sizing} ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
