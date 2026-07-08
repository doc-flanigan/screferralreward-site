'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HUB_URL } from '@/data/referral';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/get-the-code', label: 'Get the Code' },
  { href: '/#faq', label: 'FAQ' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-charcoal/85 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_#ffd700]" />
          <span className="font-display font-bold tracking-wide text-platinum group-hover:text-gold transition-colors">
            screferralreward
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-platinum/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-platinum/60 hover:text-gold transition-colors"
            >
              dayonecitizen.com ↗
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md border border-white/10 p-2 text-platinum"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-charcoal">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-platinum/80 hover:bg-charcoalMid hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm text-platinum/60 hover:bg-charcoalMid hover:text-gold transition-colors"
            >
              dayonecitizen.com ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
