'use client';

import { useState } from 'react';
import { REFERRAL_CODE, REFERRAL_URL } from '@/data/referral';

type Props = {
  variant?: 'hero' | 'inline';
};

export default function ReferralCodeBox({ variant = 'hero' }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: 'code-copy',
        referralCode: REFERRAL_CODE,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable — silently no-op; user can still select text
    }
  };

  const isHero = variant === 'hero';

  return (
    <div
      className={`mx-auto w-full ${isHero ? 'max-w-xl' : 'max-w-md'} bg-charcoalMid border-2 border-gold rounded-lg p-5 sm:p-6 shadow-gold`}
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold mb-3 text-center">
        Your Referral Code
      </p>
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <code
          aria-label="Star Citizen referral code"
          className={`flex-1 font-mono text-center select-all bg-charcoal border border-gold/40 rounded-md px-4 py-3 text-gold ${
            isHero ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {REFERRAL_CODE}
        </code>
        <button
          type="button"
          onClick={copy}
          className="px-5 py-3 rounded-md bg-gold text-charcoal font-bold hover:bg-goldDark transition-colors min-w-[7rem]"
          aria-live="polite"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <p className="block mt-4 text-center text-xs text-platinum/60 break-all select-all">
        {REFERRAL_URL}
      </p>
    </div>
  );
}
