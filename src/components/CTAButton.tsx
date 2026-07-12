'use client';
import { useState, useEffect, useRef } from 'react';
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator';

type Props = {
  label?: string;
  size?: 'md' | 'lg';
  className?: string;
  trackingLabel?: string;
};

export default function CTAButton({
  label = 'Claim Your 50,000 UEC Now',
  size = 'lg',
  className = '',
  trackingLabel,
}: Props) {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL);
  useEffect(() => { setHref(getRotatedReferralUrl()); }, []);

  const linkRef = useRef<HTMLAnchorElement>(null);
  const impressionFired = useRef(false);

  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (impressionFired.current) return;
        if (!entries.some((entry) => entry.isIntersecting)) return;
        impressionFired.current = true;
        observer.disconnect();

        const code = el.href.split('referral=')[1] ?? ''
        fetch('/api/log', {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            label: `impression:${trackingLabel ?? 'unknown'}`,
            referralCode: code,
            page: window.location.pathname,
            site: window.location.hostname,
          }),
        }).catch(() => {})
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [trackingLabel]);

  const sizing =
    size === 'lg'
      ? 'px-8 py-4 text-lg'
      : 'px-5 py-2.5 text-sm';

  const handleClick = () => {
    const code = href.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel ?? 'unknown',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
  }

  return (
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-wide bg-gold text-charcoal hover:bg-goldDark transition-all hover:translate-y-[-1px] hover:shadow-gold ${sizing} ${className}`}
      onClick={handleClick}
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
